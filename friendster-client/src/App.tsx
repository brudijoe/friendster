import { useState } from "react";
import useFriends, { FriendContext } from "./hooks/useFriends.ts";
import { Header } from "./pages/Header.tsx";
import { FriendList } from "./pages/Friend/FriendList.tsx";
import { Friend } from "./types/types.ts";
import { CreateFriend } from "./pages/CreateFriend.tsx";

function App() {
  const { friends, addFriend, deleteFriend, editFriend, loading, error } =
    useFriends();

  const [newFriends] = useState<Friend[]>([
    {
      friendId: 1,
      basics: {
        firstName: "Bob",
        lastName: "Dylon",
        age: 30,
      },
      details: {
        politicalOrientation: "",
        religion: "",
        hobbies: ["counting rocks", "breathing air"],
        likes: ["technology"],
        dislikes: ["mint chocolate", "brussel sprouts"],
        goals: ["eating enough chocolate"],
        worries: ["not enough chocolate"],
        taboos: ["", ""],
        personality: {
          MBTI: "ENFJ",
          quirks: [""],
          strengths: [""],
          weaknesses: [""],
        },
        birthday: {
          date: "30.03.1933",
          presentIdeas: ["bag of rice", "printer paper"],
          pastPresents: [""],
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
    <FriendContext.Provider
      value={{ friends, addFriend, deleteFriend, editFriend, loading, error }}
    >
      <div className="flex flex-col h-screen bg-gray-900">
        <Header />
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          friends && (
            <>
              {/* Search Example */}
              <div>Search Friend</div>
              <CreateFriend />
              <FriendList friends={friends} />
            </>
          )
        )}
      </div>
    </FriendContext.Provider>
  );
}

export default App;
