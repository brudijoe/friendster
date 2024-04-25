import { useRef } from "react";
import { ButtonGroup } from "../../components/ButtonGroup";
import { Button } from "../../components/buttons/Button";
import { DeleteDialog } from "../../components/dialogs/DeleteDialog";
import { EditDialog } from "../../components/dialogs/EditDialog";
import { Friend } from "../../types/types";
import { FriendContent } from "./FriendContent";
import { FriendInformation } from "./FriendInformation";

type FriendProps = {
  singleFriend: Friend;
};

export function FriendCard({ singleFriend }: FriendProps) {
  const editDialogRef = useRef<HTMLDialogElement | null>(null);
  const deleteDialogRef = useRef<HTMLDialogElement | null>(null);

  const handleEditDialogOpen = () => {
    if (editDialogRef.current) {
      editDialogRef.current.showModal();
    }
  };

  const handleDeleteDialogOpen = () => {
    if (deleteDialogRef.current) {
      deleteDialogRef.current.showModal();
    }
  };

  return (
    <div
      className="flex flex-row justify-between items-center p-4 bg-gray-800 border-2 border-white shadow-md rounded"
      key={singleFriend.friendId}
    >
      <FriendInformation friend={singleFriend} />
      <FriendContent friend={singleFriend} />
      <ButtonGroup flexDirection="flex-row" gap="gap-4">
        <Button
          borderColor="border-blue-500"
          backgroundColorHover="hover:bg-blue-700"
          onClick={handleEditDialogOpen}
          ariaLabel="edit"
        >
          Edit
        </Button>
        <Button
          borderColor="border-red-500"
          backgroundColorHover="hover:bg-red-700"
          onClick={handleDeleteDialogOpen}
          ariaLabel="delete"
        >
          Delete
        </Button>
      </ButtonGroup>
      <DeleteDialog
        title={"Delete Friend"}
        dialogRef={deleteDialogRef}
        existingFriendId={singleFriend.friendId}
      />
      <EditDialog
        title={"Edit Friend"}
        existingFriendId={singleFriend.friendId}
        existingFriend={singleFriend}
        dialogRef={editDialogRef}
      />
    </div>
  );
}
