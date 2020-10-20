import axios from "axios";

async function getVideos() {
  const { data } = await axios.get("https://kitsu.io/api/edge/anime");
  console.log(data);
  return data;
}

async function getTrendVideos() {
    console.log("abbb")
    const { data } = await axios.get("https://kitsu.io/api/edge/trending/anime");
    console.log(data);
    return data;
  }

// const getGenres = (videoId) => {
//     // return await axios.get(`https://kitsu.io/api/edge/anime/${videoId}/genres`);
//     return new Promise((resolve, reject) => {
//       const res = fetch(`https://kitsu.io/api/edge/anime/${videoId}/genres`)
//         .then(res => {
//           res.json()
//             .then(json => {
//               if (res.ok)resolve(json);      
//               reject(res);
//             })          
//         })
//         .catch(err => reject(err));      
//     });
//   };

export { getVideos, getVideo, getTrendVideos, getGenres };
