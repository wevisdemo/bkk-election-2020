import { Config } from '../contexts/config';
import { Preset } from '../contexts/preset';
import { CandidateMap } from '../models/candidate';
import { ElectionData, PresetIndex } from '../models/election';

export async function fetchConfig(): Promise<Config> {
	return getJson<Config>(
		(() => {
			switch (import.meta.env.VITE_BUILD_ENV) {
				// case 'PRODUCTION':
				// 	return 'https://bkkelection2022live.wevis.info/configs/production.json';
				// case 'STAGING':
				// 	return 'https://bkkelection2022live.wevis.info/configs/staging.json';
				default:
					return '/map/data/dev.config.json';
			}
		})()
	);
}

export async function fetchPreset({
	electionDataUrl,
	candidateDataUrl,
	refreshIntervalMs,
	...rest
}: PresetIndex): Promise<Preset> {
	const [electionData, candidateMap] = await Promise.all([
		getJson<ElectionData>(electionDataUrl),
		getJson<CandidateMap>(candidateDataUrl)
	]);

	electionData.districts.forEach(({ voting }) => voting.result.sort((a, z) => z.count - a.count));

	return {
		...rest,
		electionData,
		candidateMap
	};
}

export async function getJson<T>(url: string): Promise<T> {
	const response = await fetch(url);
	return response.json();
}
