import { useQuery } from "react-query";
import axios from "axios";

async function getVideoById(_,videoId) {

  const { data } = await axios.get(`https://kitsu.io/api/edge/anime/${videoId}`);
  console.log(data);
  return data;
}

export default function useVideo(videoId) {
  return useQuery(["video", videoId], getVideoById);
}
