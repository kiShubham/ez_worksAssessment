import axios from "axios";

const CORS_PROXY = "https://api.allorigins.win/get?url="; // using proxy as api link given is http not https ;
export const Backend_endpoint = "http://34.225.132.160:8002/api";

export const postEmailreq = async (data) => {
  try {
    const res = await axios.post(
      `${CORS_PROXY}${encodeURIComponent(Backend_endpoint)}`,
      data
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

// console.log(`${CORS_PROXY}${Backend_endpoint}`);
// response codes
// 200 successfull or 422 not valid
