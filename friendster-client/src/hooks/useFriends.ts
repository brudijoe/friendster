import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { SETTINGS } from "../settings";
import {
  FriendStore,
  Friend,
  Loading,
  ErrorMessage,
  FriendWithOutId,
} from "../types/types";

export const FriendContext = createContext<FriendStore | null>(null);

export default function useFriends(): FriendStore {
  const [friends, setFriends] = useState<Friend[] | null>(null);
  const [error, setError] = useState<ErrorMessage>(null);
  const [loading, setLoading] = useState<Loading>(true);

  useEffect(() => {
    axios
      .get<Friend[]>(`${SETTINGS.HOST}/api/v1/friends`)
      .then((response) => {
        setFriends(response.data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError("Error getting friends: " + err.message);
        setLoading(false);
      });
  }, []);

  const addFriend = async (newFriend: FriendWithOutId): Promise<void> => {
    try {
      const response = await axios.post<Friend[]>(
        `${SETTINGS.HOST}/api/v1/addFriend`,
        newFriend
      );
      setFriends(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError("Error adding friend: " + error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const deleteFriend = async (friendId: number): Promise<void> => {
    try {
      const response = await axios.delete<Friend[]>(
        `${SETTINGS.HOST}/api/v1/deleteFriend`,
        {
          params: {
            friendId: friendId,
          },
        }
      );
      setFriends(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError("Error deleting friend: " + error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const editFriend = async (
    friendId: number,
    friend: Friend
  ): Promise<void> => {
    try {
      const response = await axios.put<Friend[]>(
        `${SETTINGS.HOST}/api/v1/editFriend`,
        friend,
        {
          params: {
            friendId: friendId,
          },
        }
      );
      console.log(response);

      setFriends(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError("Error editing friend: " + error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return {
    friends,
    addFriend,
    deleteFriend,
    editFriend,
    loading,
    error,
  };
}
