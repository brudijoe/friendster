import { map } from "ramda";
import { Friend } from "../../types/types";
import { FriendCard } from "./FriendCard";

type FriendListProps = {
  friends: Friend[];
};

export function FriendList({ friends }: FriendListProps) {
  return (
    <div className="flex flex-col gap-y-2 px-2 pb-2 overflow-y-auto">
      {map(
        (singleFriend) => (
          <FriendCard key={singleFriend.friendId} singleFriend={singleFriend} />
        ),
        friends
      )}
    </div>
  );
}
