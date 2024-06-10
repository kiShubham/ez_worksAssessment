import axios from "axios";

const CORS_sh_PROXY = "https://proxy.cors.sh/"; //https://cors.sh/

const Api_endpoint = "http://34.225.132.160:8002/api";

const headerObj = {
  headers: {
    "x-cors-api-key": "temp_ded85bc3c53176589cafa9a0077db77b",
  },
};

export const postEmailreq = async (data) => {
  try {
    const res = await axios.post(
      `${CORS_sh_PROXY}${Api_endpoint}`,
      data,
      headerObj
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

/* 
  
//* https://cors-anywhere.herokuapp.com/corsdemo ,
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

 */
