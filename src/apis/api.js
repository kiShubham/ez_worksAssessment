import axios from "axios";

// https://cors-anywhere.herokuapp.com/corsdemo ,
// visit above link in the browser you are runnig the app and request for temporary access ;

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
// using proxy as api link given is http not https ;
export const Api_endpoint = "http://34.225.132.160:8002/api";

export const postEmailreq = async (data) => {
  try {
    const res = await axios.post(`${CORS_PROXY}${Api_endpoint}`, data);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

// console.log(`${CORS_PROXY}${Api_endpoint}`);
// response codes
// 200 successfull or 422 not valid
