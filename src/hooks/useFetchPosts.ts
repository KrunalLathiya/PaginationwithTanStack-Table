import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../types/Post";

export const useFetchPosts = () => {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(result.data);
      } catch (err) {
        setError("An error occurred while fetching data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, error };
};
