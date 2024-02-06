import { useState } from "react";
import useFriends, { FriendContext } from "./hooks/useFriends.ts";
import { Header } from "./pages/Header.tsx";
import { map } from "ramda";
import { FriendList } from "./pages/Friend/FriendList.tsx";
import { Friend } from "./types/types.ts";

function App() {
  const { friends, loading, error } = useFriends();

  const [newFriends, setNewFriends] = useState<Friend[]>([
    {
      friendId: 1,
      basics: {
        firstName: "Bob",
        lastName: "Dylon",
        age: 30,
        birthday: "30.03.1933",
        birthdayPresentIdeas: ["bag of rice", "printer paper"],
        MBTI: "ENFJ",
      },
      details: {
        interests: {
          hobbies: ["counting rocks", "breathing air"],
          likes: ["technology"],
          dislikes: ["mint chocolate", "brussel sprouts"],
          goals: ["eating enough chocolate"],
          worries: ["not enough chocolate"],
          politicalOrientation: "",
          religion: "",
          taboos: ["", ""],
        },
        social: {
          partner: {},
          commonFriends: [""],
          sharedStories: [""],
          family: [
            {
              role: "father",
              firstName: "Bob",
              lastName: "Dylon",
              birthday: "30.03.1933",
              age: 30,
            },
            {
              role: "mother",
              firstName: "Bob",
              lastName: "Dylon",
              birthday: "30.03.1933",
              age: 30,
            },
          ],
        },
      },
    },
    {
      friendId: 2,
      basics: {
        firstName: "Joe",
        lastName: "Doe",
        age: 30,
        birthday: "30.03.1933",
        birthdayPresentIdeas: ["bag of rice", "printer paper"],
        MBTI: "ENFJ",
      },
      details: {
        interests: {
          hobbies: ["counting rocks", "breathing air"],
          likes: ["technology"],
          dislikes: ["mint chocolate", "brussel sprouts"],
          goals: ["eating enough chocolate"],
          worries: ["not enough chocolate"],
          politicalOrientation: "",
          religion: "",
          taboos: ["", ""],
        },
        social: {
          partner: {},
          commonFriends: [""],
          sharedStories: [""],
          family: [
            {
              role: "father",
              firstName: "Bob",
              lastName: "Dylon",
              birthday: "30.03.1933",
              age: 30,
            },
            {
              role: "mother",
              firstName: "Bob",
              lastName: "Dylon",
              birthday: "30.03.1933",
              age: 30,
            },
          ],
        },
      },
    },
  ]);

  return (
    <FriendContext.Provider value={{ friends, loading, error }}>
      <div className="flex flex-col h-screen bg-gray-900">
        <Header />
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          friends && (
            <>
              {/* {map(
                (singleFriend) => (
                  <div key={singleFriend.friendId}>
                    {singleFriend.friendFirstName}&nbsp;
                    {singleFriend.friendLastName}
                  </div>
                ),
                friends
              )} */}
            </>
          )
        )}
        {/* Search Example */}
        <div>Search Friend</div>
        {/* Friend Example */}
        <FriendList friends={newFriends} />
      </div>
    </FriendContext.Provider>
  );
}

export default App;
