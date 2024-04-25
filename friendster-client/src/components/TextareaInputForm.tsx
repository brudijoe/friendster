import { Friend, FriendWithOutId } from "../types/types";

type TextareaProps<T> = {
  friend: Friend | FriendWithOutId;
  onSetFriend: React.Dispatch<React.SetStateAction<T>>;
};

export function TextareaInputForm<T>({
  friend,
  onSetFriend,
}: TextareaProps<T>) {
  function handleChangeInputFirstName(event: React.ChangeEvent<HTMLInputElement>) {
    const newFriendFirstName = event.target.value;
    if (onSetFriend) {
      onSetFriend((prevFriend) => ({
        ...prevFriend,
        basics: {
          ...prevFriend.basics,
          firstName: newFriendFirstName,
        },
      }));
    }
  }

  function handleChangeInputLastName(event: React.ChangeEvent<HTMLInputElement>) {
    const newFriendLastName = event.target.value;
    if (onSetFriend) {
      onSetFriend((prevFriend) => ({
        ...prevFriend,
        basics: {
          ...prevFriend.basics,
          lastName: newFriendLastName,
        },
      }));
    }
  }

  return (
    <form className="flex flex-col gap-y-2">
      <input
        className="p-2 bg-gray-800 text-white border-2 border-white rounded"
        value={friend.basics.firstName}
        placeholder="First Name"
        maxLength={50}
        onChange={handleChangeInputFirstName}
      />
      <input
        className="p-2 bg-gray-800 text-white border-2 border-white rounded"
        value={friend.basics.lastName}
        placeholder="Last Name"
        maxLength={50}
        onChange={handleChangeInputLastName}
      />
    </form>
  );
}
