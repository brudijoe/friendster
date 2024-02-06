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
  birthday: string;
  birthdayPresentIdeas: string[];
  MBTI: string;
};

export type Details = {
  interests: Interests;
  social: Social;
};

export type Interests = {
  hobbies: string[];
  likes: string[];
  dislikes: string[];
  goals: string[];
  worries: string[];
  politicalOrientation: string;
  religion: string;
  taboos: string[];
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
