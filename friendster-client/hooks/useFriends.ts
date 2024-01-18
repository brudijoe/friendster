import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { SETTINGS } from "../settings";

export const FriendContext = createContext<null>(null);

export default function useFriends() {
  const [friends, setFriends] = useState<null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${SETTINGS.HOST}/api/v1/friends`)
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
