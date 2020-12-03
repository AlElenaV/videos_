import axios from "axios"

const KEY = "AIzaSyD8B1UYwRhwuIizcc9DO2kuenKsSJirw74"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
})
