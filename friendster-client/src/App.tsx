import useFriends, { FriendContext } from "../hooks/useFriends";
import { map } from "ramda";

function App() {
  const { friends, loading, error } = useFriends();

  return (
    <FriendContext.Provider value={{ friends, loading, error }}>
      <div>Friendster</div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        friends && (
          <div>
            {map(
              (singleFriend) => (
                <div key={singleFriend.friendId}>
                  {singleFriend.friendFirstName}&nbsp;
                  {singleFriend.friendLastName}
                </div>
              ),
              friends
            )}
          </div>
        )
      )}
    </FriendContext.Provider>
  );
}

export default App;
