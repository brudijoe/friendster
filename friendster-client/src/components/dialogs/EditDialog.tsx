import { useContext, useState } from "react";
import { FriendContext } from "../../hooks/useFriends";
import { Button } from "../buttons/Button";
import { Title } from "../Title";
import { Dialog } from "../Dialog";
import { ButtonGroup } from "../ButtonGroup";
import { DialogContentWrapper } from "../DialogContentWrapper";
import { Friend } from "../../types/types";
import { TextareaInputForm } from "../TextareaInputForm";

type EditDialogProps = {
  title: string;
  existingFriendId: number;
  existingFriend: Friend;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

export function EditDialog({
  title,
  existingFriendId,
  existingFriend,
  dialogRef,
}: EditDialogProps) {
  const friendContext = useContext(FriendContext);

  if (!friendContext) {
    throw new Error("FriendContext is null");
  }

  const { editFriend } = friendContext;

  const [currentFriend, setCurrentFriend] = useState<Friend>(existingFriend);

  function handleEditFriend() {
    console.log("edit");
    console.log(currentFriend);
    if (existingFriendId !== undefined) {
      editFriend(existingFriendId, currentFriend);
      if (dialogRef.current !== null) {
        dialogRef.current.close();
      }
    }
  }

  function handleDialogClose() {
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
  }

  return (
    <Dialog width="w-6/12" dialogRef={dialogRef}>
      <DialogContentWrapper>
        <Title title={title} />
        <TextareaInputForm
          friend={currentFriend}
          onSetFriend={setCurrentFriend}
        />
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
            borderColor="border-green-300"
            backgroundColor="bg-green-500"
            backgroundColorHover="hover:bg-green-700"
            onClick={handleEditFriend}
            ariaLabel="confirm"
          >
            Confirm
          </Button>
        </ButtonGroup>
      </DialogContentWrapper>
    </Dialog>
  );
}
