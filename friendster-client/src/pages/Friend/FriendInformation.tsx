import { Friend } from "../../types/types";

type FriendInformationProps = {
  friend: Friend;
};

export function FriendInformation({ friend }: FriendInformationProps) {
  return (
    <div className="flex flex-col">
      <div className="text-white">ID</div>
      <div className="text-white">Created: 25.05.2025</div>
    </div>
  );
}
