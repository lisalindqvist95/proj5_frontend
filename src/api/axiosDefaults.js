import axios from "axios";

/** CREDIT: Adapted from the Code Institute Moments Tutorial Project
 * https://github.com/Code-Institute-Solutions/moments/
*/

axios.defaults.baseURL = "https://proj5-api.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create(); 