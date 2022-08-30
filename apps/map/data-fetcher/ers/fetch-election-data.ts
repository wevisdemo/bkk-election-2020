import { District, ElectionData, ElectionDataType, Voting } from "../../src/models/election";
import { ElectionDataFetcher, ElectionDataFetcherType } from "../fetcher";
import { getCandidates, getElection, getElectionAreaById, getElectionAreas } from "./election-data";
import { getCandidates as getECTCandidate, getElection as getECTElection, getElectionAreaById as getECTElectionAreaById, getElectionAreas as getECTElectionAreas } from "./realtime/final";
import { Candidate, Election, ElectionArea } from "./election-data/models";
import { Election as RealtimeElection, Candidate as RealtimeCandidate, ElectionAreaWithCandidates } from './realtime/models';
import { BKK_COUNCIL_MEMBER_ELECTION_ID, BKK_GOVERNOR_ELECTION_ID } from "./election-ids";
import { getIdForCouncilMember, getIdForGovernor, getIdForRealtimeCouncilMember, IdGetter } from "./get-candidate-ids";
import { getCandidates as getRealtimeCandidates, getElection as getRealtimeElection, getElectionAreaById as getRealtimeElectionAreaById, getElectionAreas as getRealtimeElectionAreas } from "./realtime";
import { stripDistrictPrefix } from "./utils";

export const fetchElectionData: ElectionDataFetcher = (type: ElectionDataFetcherType): Promise<ElectionData> => {
  if (type === ElectionDataFetcherType.LiveGovernor) {
    return fetchLiveGovernorElectionData();
  } else if (type === ElectionDataFetcherType.LiveCouncilMember) {
    return fetchLiveCouncilMemberElectionData();
  } else if (type === ElectionDataFetcherType.LiveECTGovernor) {
    return fetchLiveECTElectionData();
  } else if (type === ElectionDataFetcherType.LiveECTCouncilMember) {
    return fetchLiveECTCouncilMemberElectionData();
  } else if (type === ElectionDataFetcherType.Governor) {
    return fetchGovernorElectionData();
  } else if (type === ElectionDataFetcherType.CouncilMember) {
    return fetchCouncilMemberElectionData();
  }
  throw new Error('Not a suitable election data fetcher type!');
}

async function fetchLiveGovernorElectionData(): Promise<ElectionData> {
  const election = await getRealtimeElection(BKK_GOVERNOR_ELECTION_ID);
  const candidates = await getRealtimeCandidates(BKK_GOVERNOR_ELECTION_ID);
  const areaIds = (await getRealtimeElectionAreas(BKK_GOVERNOR_ELECTION_ID)).map(a => a.id);
  const areas = await Promise.all(
    areaIds.map(id => getRealtimeElectionAreaById(BKK_GOVERNOR_ELECTION_ID, id))
  );

  return mapLiveElectionData(election, candidates, areas);
}

async function fetchLiveCouncilMemberElectionData(): Promise<ElectionData> {
  const election = await getRealtimeElection(BKK_COUNCIL_MEMBER_ELECTION_ID);
  const areaIds = (await getRealtimeElectionAreas(BKK_COUNCIL_MEMBER_ELECTION_ID)).map(a => a.id);
  const areas = await Promise.all(
    areaIds.map(id => getRealtimeElectionAreaById(BKK_COUNCIL_MEMBER_ELECTION_ID, id))
  );

  return mapLiveCouncilMemberElectionData(election, areas);
}

async function fetchLiveECTElectionData(): Promise<ElectionData> {
  const election = await getECTElection(BKK_GOVERNOR_ELECTION_ID);
  const candidates = await getECTCandidate(BKK_GOVERNOR_ELECTION_ID);
  const areaIds = (await getECTElectionAreas(BKK_GOVERNOR_ELECTION_ID)).map(a => a.id);
  const areas = await Promise.all(
    areaIds.map(id => getECTElectionAreaById(BKK_GOVERNOR_ELECTION_ID, id))
  );

  return mapLiveElectionData(election, candidates, areas);
}

async function fetchLiveECTCouncilMemberElectionData(): Promise<ElectionData> {
  const election = await getECTElection(BKK_COUNCIL_MEMBER_ELECTION_ID);
  const areaIds = (await getECTElectionAreas(BKK_COUNCIL_MEMBER_ELECTION_ID)).map(a => a.id);
  const areas = await Promise.all(
    areaIds.map(id => getECTElectionAreaById(BKK_COUNCIL_MEMBER_ELECTION_ID, id))
  );

  return mapLiveCouncilMemberElectionData(election, areas);
}

async function fetchCouncilMemberElectionData(): Promise<ElectionData> {
  const { election, candidates, areas } = await fetchRemoteForElectionData(BKK_COUNCIL_MEMBER_ELECTION_ID);

  return {
    type: ElectionDataType.Completed,
    total: mapTotal(election, candidates, getIdForCouncilMember),
    districts: areas.map(mapDistrict),
  };
}

async function fetchGovernorElectionData(): Promise<ElectionData> {
  const { election, candidates, areas } = await fetchRemoteForElectionData(BKK_GOVERNOR_ELECTION_ID);

  return {
    type: ElectionDataType.Completed,
    total: mapTotal(election, candidates, getIdForGovernor),
    districts: areas.map(mapDistrict),
  };
}

async function fetchRemoteForElectionData(electionId: number): Promise<{ election: Election, candidates: Candidate[], areas: ElectionArea[] }> {
  const election = await getElection(electionId);
  const candidates = await getCandidates(electionId);
  const areaIds = (await getElectionAreas(electionId)).map(a => a.id);
  const areas = await Promise.all(
    areaIds.map(id => getElectionAreaById(electionId, id))
  );
  return {
    election,
    candidates,
    areas,
  };
}

function mapTotal(
  election: Election,
  candidates: Candidate[],
  idGetter: IdGetter,
): Voting {
  return {
    eligiblePopulation: election.eligible,
    totalVotes: election.totalVotes,
    badVotes: election.badVotes,
    noVotes: election.noVotes,
    progress: 100,
    result: candidates.map(c => ({
      candidateId: idGetter(c),
      count: c.totalVotes,
    })),
  }
}

function mapDistrict(
  a: ElectionArea
): District {
  return {
    name: stripDistrictPrefix(a.name),
    voting: {
      eligiblePopulation: a.eligible,
      totalVotes: a.totalVotes,
      badVotes: a.badVotes,
      noVotes: a.noVotes,
      progress: 100,
      result: a.candidates.map(c => ({
        candidateId: getIdForCouncilMember(c),
        count: c.totalVotes,
      }))
    },
  };
}

function mapLiveElectionData(election: RealtimeElection, candidates: RealtimeCandidate[], areas: ElectionAreaWithCandidates[]) {
  return {
    type: ElectionDataType.Live,
    total: {
      eligiblePopulation: election.eligible,
      totalVotes: election.totalVotes,
      badVotes: election.badVotes,
      noVotes: election.noVotes,
      progress: election.progress,
      result: candidates.map(c => ({
        candidateId: getIdForGovernor(c),
        count: c.totalVotes,
      })),
    },
    districts: areas.map(a => ({
      name: stripDistrictPrefix(a.name),
      voting: {
        eligiblePopulation: a.eligible,
        totalVotes: a.totalVotes,
        badVotes: a.badVotes,
        noVotes: a.noVotes,
        progress: a.progress,
        result: a.candidates.map(c => ({
          candidateId: getIdForGovernor(c),
          count: c.totalVotes,
        }))
      }
    })),
  }
}

function mapLiveCouncilMemberElectionData(election: RealtimeElection, areas: ElectionAreaWithCandidates[]) {
  return {
    type: ElectionDataType.Live,
    total: {
      eligiblePopulation: election.eligible,
      totalVotes: election.totalVotes,
      badVotes: election.badVotes,
      noVotes: election.noVotes,
      progress: election.progress,
      result: [],
    },
    districts: areas.map(a => ({
      name: stripDistrictPrefix(a.name),
      voting: {
        eligiblePopulation: a.eligible,
        totalVotes: a.totalVotes,
        badVotes: a.badVotes,
        noVotes: a.noVotes,
        progress: a.progress,
        result: a.candidates.map(c => ({
          candidateId: getIdForRealtimeCouncilMember(c, a),
          count: c.totalVotes,
        }))
      }
    })),
  }
}