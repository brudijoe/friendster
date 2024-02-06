import { Friend } from "../../types/types";

type FriendProps = {
  singleFriend: Friend;
};

export function FriendCard({ singleFriend }: FriendProps) {
  return <div>{singleFriend.basics.firstName}</div>;
}
