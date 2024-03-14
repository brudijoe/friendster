export type FriendStore = {
  friends: Friend[] | null;
  loading: Loading;
  error: ErrorMessage;
};

export type Loading = boolean;
export type ErrorMessage = string | null;

export type Friend = {
  friendId: number;
  basics: Basics;
  details: Details;
};

export type Basics = {
  firstName: string;
  lastName: string;
  age: number;
};

export type Details = {
  politicalOrientation: string;
  religion: string;
  hobbies: string[];
  likes: string[];
  dislikes: string[];
  goals: string[];
  worries: string[];
  taboos: string[];
  personality: Personality;
  birthday: Birthday;
  social: Social;
};

export type Personality = {
  MBTI: string;
  quirks: string[];
  strengths: string[];
  weaknesses: string[];
};

export type Birthday = {
  date: string;
  presentIdeas: string[];
  pastPresents: string[];
};

export type Social = {
  partner: Partner;
  commonFriends: string[];
  sharedStories: string[];
  family: Family[];
};

export type Partner = {};

export type Family = {
  role: string;
  firstName: string;
  lastName: string;
  birthday: string;
  age: number;
};
