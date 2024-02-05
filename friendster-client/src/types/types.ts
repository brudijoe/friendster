export type FriendStore = {
  friends: Friend[] | null;
  loading: Loading;
  error: ErrorMessage;
};

export type Loading = boolean;
export type ErrorMessage = string | null;

export type Friend = {
  friendId: number;
  friendFirstName: string;
  friendLastName: string;
};
