import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { SETTINGS } from "../settings";
import { FriendStore, Friend, Loading, ErrorMessage } from "../types/types";

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

  return {
    friends,
    loading,
    error,
  };
}
