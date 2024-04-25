import { useContext } from "react";
import { FriendContext } from "../../hooks/useFriends";
import { Button } from "../buttons/Button";
import { Title } from "../Title";
import { Dialog } from "../Dialog";
import { ButtonGroup } from "../ButtonGroup";
import { DialogContentWrapper } from "../DialogContentWrapper";

type DeleteDialogProps = {
  title: string;
  existingFriendId: number;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

export function DeleteDialog({
  title,
  existingFriendId,
  dialogRef,
}: DeleteDialogProps) {
  const noteContext = useContext(FriendContext);

  if (!noteContext) {
    throw new Error("FriendContext is null");
  }

  const { deleteFriend } = noteContext;

  function handleDeleteNote() {
    deleteFriend(existingFriendId);
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
  }

  function handleDialogClose() {
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
  }

  return (
    <Dialog width="w-72" dialogRef={dialogRef}>
      <DialogContentWrapper>
        <Title title={title} />
        <div className="text-white">{existingFriendId}</div>
        <ButtonGroup flexDirection="flex-row" justify="justify-between">
          <Button
            borderColor="border-gray-500"
            backgroundColorHover="hover:bg-gray-700"
            onClick={handleDialogClose}
            ariaLabel="cancel"
          >
            Cancel
          </Button>
          <Button
            borderColor="border-red-300"
            backgroundColor="bg-red-500"
            backgroundColorHover="hover:bg-red-700"
            onClick={handleDeleteNote}
            ariaLabel="delete"
          >
            Delete
          </Button>
        </ButtonGroup>
      </DialogContentWrapper>
    </Dialog>
  );
}
