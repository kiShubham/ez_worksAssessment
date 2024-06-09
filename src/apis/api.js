import axios from "axios";

export const Backend_endpoint = "http://34.225.132.160:8002/api";

export const postEmailreq = async (data) => {
  try {
    const res = await axios.post(Backend_endpoint, data);
    // console.log(res);
    return res;
  } catch (error) {
    return error.response;
  }
};

// response codes
// 200 successfull or 422 not valid
