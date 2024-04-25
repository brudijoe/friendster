import { Friend } from "../../types/types";

type FriendContentProps = {
  friend: Friend;
};

export function FriendContent({ friend }: FriendContentProps) {
  return (
    <div className="flex-1 px-4">
      {friend.basics.firstName ? (
        <div className="flex flex-col">
          <div className="text-left font-bold text-lg text-white">
            {friend.basics.firstName}
          </div>
          <div className="text-justify text-white">
            {friend.basics.lastName}
          </div>
        </div>
      ) : (
        <div className="text-justify text-white">{friend.basics.firstName}</div>
      )}
    </div>
  );
}
