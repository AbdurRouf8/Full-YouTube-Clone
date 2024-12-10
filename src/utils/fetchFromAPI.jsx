import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
  maxResults: '50',
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

try {
  const response = await axios.request(options);
} catch (error) {
  console.error(error);
}
export const fetchFromAPI = async (url) =>{
  const {data} = await axios.get(`${BASE_URL}/${url}`,options);
  return data;
}
