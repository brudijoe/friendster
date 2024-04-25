import { useRef } from "react";
import { Button } from "../components/buttons/Button";
import { AddDialog } from "../components/dialogs/AddDialog";

export function CreateFriend() {
  const openDialogRef = useRef<HTMLDialogElement | null>(null);

  const handleDialogOpen = () => {
    if (openDialogRef.current) {
      openDialogRef.current.showModal();
    }
  };

  return (
    <div className="p-4">
      <Button
        borderColor="border-green-300"
        backgroundColor="bg-green-500"
        backgroundColorHover="hover:bg-green-700"
        onClick={handleDialogOpen}
        ariaLabel="new"
      >
        New
      </Button>
      <AddDialog title="Add Friend" dialogRef={openDialogRef} />
    </div>
  );
}
