import { useQuery } from "react-query";
import axios from "axios";

const getTrendVideos = async () => {
  const { data } = await axios.get("https://kitsu.io/api/edge/trending/anime");
  console.log("video", data);
  return data;
};

export default function useTrendVideos() {
  return useQuery("videos", getTrendVideos);
}
