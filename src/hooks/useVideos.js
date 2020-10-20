import { useQuery } from "react-query";
import axios from "axios";

async function getVideos() {
  const { data } = await axios.get("https://kitsu.io/api/edge/anime");
  console.log(data);
  return data;
}

export default function useVideos() {
  return useQuery("videos", getVideos);
}
