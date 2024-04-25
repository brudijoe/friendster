import { useContext, useState } from "react";
import { FriendContext } from "../../hooks/useFriends";
import { Button } from "../buttons/Button";
import { Title } from "../Title";
import { Dialog } from "../Dialog";
import { ButtonGroup } from "../ButtonGroup";
import { DialogContentWrapper } from "../DialogContentWrapper";
import { TextareaInputForm } from "../TextareaInputForm";
import { FriendWithOutId } from "../../types/types";

type AddDialogProps = {
  title: string;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

export function AddDialog({ title, dialogRef }: AddDialogProps) {
  const friendContext = useContext(FriendContext);

  if (!friendContext) {
    throw new Error("FriendContext is null");
  }

  const { addFriend } = friendContext;
  const [friend, setFriend] = useState<FriendWithOutId>({
    basics: {
      firstName: "",
      lastName: "",
      age: 0,
    },
    details: {
      politicalOrientation: "",
      religion: "",
      hobbies: [],
      likes: [],
      dislikes: [],
      goals: [],
      worries: [],
      taboos: [],
      personality: {
        MBTI: "",
        quirks: [],
        strengths: [],
        weaknesses: [],
      },
      birthday: {
        date: "",
        presentIdeas: [],
        pastPresents: [],
      },
      social: {
        partner: {},
        commonFriends: [],
        sharedStories: [],
        family: [],
      },
    },
  });

  function handleAddFriend() {
    addFriend({
      basics: {
        firstName: "",
        lastName: "",
        age: 0,
      },
      details: {
        politicalOrientation: "",
        religion: "",
        hobbies: [],
        likes: [],
        dislikes: [],
        goals: [],
        worries: [],
        taboos: [],
        personality: {
          MBTI: "",
          quirks: [],
          strengths: [],
          weaknesses: [],
        },
        birthday: {
          date: "",
          presentIdeas: [],
          pastPresents: [],
        },
        social: {
          partner: {},
          commonFriends: [],
          sharedStories: [],
          family: [],
        },
      },
    });
    setFriend({
      basics: {
        firstName: "",
        lastName: "",
        age: 0,
      },
      details: {
        politicalOrientation: "",
        religion: "",
        hobbies: [],
        likes: [],
        dislikes: [],
        goals: [],
        worries: [],
        taboos: [],
        personality: {
          MBTI: "",
          quirks: [],
          strengths: [],
          weaknesses: [],
        },
        birthday: {
          date: "",
          presentIdeas: [],
          pastPresents: [],
        },
        social: {
          partner: {},
          commonFriends: [],
          sharedStories: [],
          family: [],
        },
      },
    });
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
  }

  function handleDialogClose() {
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
    setFriend({
      basics: {
        firstName: "",
        lastName: "",
        age: 0,
      },
      details: {
        politicalOrientation: "",
        religion: "",
        hobbies: [],
        likes: [],
        dislikes: [],
        goals: [],
        worries: [],
        taboos: [],
        personality: {
          MBTI: "",
          quirks: [],
          strengths: [],
          weaknesses: [],
        },
        birthday: {
          date: "",
          presentIdeas: [],
          pastPresents: [],
        },
        social: {
          partner: {},
          commonFriends: [],
          sharedStories: [],
          family: [],
        },
      },
    });
  }

  return (
    <Dialog width="w-6/12" dialogRef={dialogRef}>
      <DialogContentWrapper>
        <Title title={title} />
        {/* <TextareaInputForm note={note} onSetNote={setNote} /> */}
        <ButtonGroup flexDirection="flex-row" justify="justify-between">
          <Button
            borderColor="border-gray-500"
            backgroundColorHover="hover:bg-gray-700"
            onClick={handleDialogClose}
            ariaLabel="cancel"
          >
            Cancel
          </Button>
          {/* {friend.basics.firstName === "" ? (
            <Button
              borderColor="border-gray-500"
              backgroundColorHover="hover:bg-gray-700"
              ariaLabel="disabled"
              cursor="cursor-not-allowed"
            >
              Confirm
            </Button>
          ) : (
            <Button
              borderColor="border-green-300"
              backgroundColor="bg-green-500"
              backgroundColorHover="hover:bg-green-700"
              onClick={handleAddFriend}
              ariaLabel="confirm"
            >
              Confirm
            </Button>
          )} */}

          <Button
            borderColor="border-green-300"
            backgroundColor="bg-green-500"
            backgroundColorHover="hover:bg-green-700"
            onClick={handleAddFriend}
            ariaLabel="confirm"
          >
            Confirm
          </Button>
        </ButtonGroup>
      </DialogContentWrapper>
    </Dialog>
  );
}
