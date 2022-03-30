export interface ICandidate {
  id: number;
  name: string;
  team: string;
  image_url: string;
  video_url: string;
  is_highlight: boolean;
}

export interface IDistrict {
  display: string;
  value: string;
}

export enum ActionEnum {
  FETCH_CANDIDATE = 'FETCH_CANDIDATE',
}

export interface IQuestionCategory {
  policy: string[];
  opinion: string[];
  lifestyle: string[];
}

export interface ICouncil {
  name: string;
  number: number;
  district: string;
  party: string;
  age: number;
  sex: string;
  education: string;
  career: string;
}

export interface IQA {
  id: number;
  governor: string;
  question: string;
  answer: string;
  url: string;
}
