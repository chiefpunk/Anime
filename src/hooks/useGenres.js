import { useQuery } from "react-query";
import axios from "axios";

const getGenresById = async (_, videoId) => {
  console.log("dracky", videoId);
  const { data } = await axios.get(
    `https://kitsu.io/api/edge/anime/${videoId}/genres`
  );
  console.log(data);
  return data;
}

export default function useGenres(videoId) {
  return useQuery(["genres", videoId], getGenresById);
}
