import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";
import Genre from "../entities/Genre";

// const useGenres = () => ({ data: genres, error: "", isLoading: false });
const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    // initialData: { count: genres.length, next: null, results: genres },
    initialData: genres,
  });

export default useGenres;
