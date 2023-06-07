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

export interface IQuestionCategory {
  exclusive: IQuestion[];
  policy: IQuestion[];
  opinion: IQuestion[];
  lifestyle: IQuestion[];
  special: IQuestion[];
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
  disqualified: string;
}

interface IQuestionAnswerList {
  id: number;
  text: string;
}
export interface IQuestion {
  id: number;
  type: string;
  number: number;
  question: string;
  description: string;
  nc_xeff__candidates_id: number;
  answers: IQuestionAnswerList[];
  special_for_governor: {
    id: number;
    name: string;
  };
}

export interface IAnswer {
  id: number;
  nc_xeff__candidates_id: number;
  nc_xeff__questions_id: number;
  text: string;
  url: string;
  governor: {
    id: number;
    name: string;
  };
  question: {
    id: number;
    question: string;
  };
}

export interface IGovernor {
  id: null | number;
  name: null | string;
  number: null | number;
  sex: null | string;
  birthdate: null | string;
  property: null | string;
  higher_education: null | string;
  career: null | string;
  political_career: null | string;
  party: null | string;
  policy: null | string;
  contact_web: null | string;
  contact_facebook: null | string;
  contact_twitter: null | string;
  profile_pic: null | string;
  cover_pic: null | string;
  nickname: null | string;
  highlight: null | true;
  policy_url: null | string;
  age: null | number;
  basic_education: null | string;
  slogan: null | string;
  contact_youtube: null | string;
  contact_tiktok: null | string;
  other_data: null | string;
  contact_email: null | string;
  contact_instagram: null | string;
  contact_line: null | string;
  answers: IGovernorAnswer[];
  disqualified: string;
}

interface IGovernorAnswer {
  id: number;
  text: string;
}
