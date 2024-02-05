import useFriends, { FriendContext } from "./hooks/useFriends.ts";
import { Header } from "./pages/Header.tsx";
import { map } from "ramda";

function App() {
  const { friends, loading, error } = useFriends();

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
              {map(
                (singleFriend) => (
                  <div key={singleFriend.friendId}>
                    {singleFriend.friendFirstName}&nbsp;
                    {singleFriend.friendLastName}
                  </div>
                ),
                friends
              )}
            </>
          )
        )}
      </div>
    </FriendContext.Provider>
  );
}

export default App;
