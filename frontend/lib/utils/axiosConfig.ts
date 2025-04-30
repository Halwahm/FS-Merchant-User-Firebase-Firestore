import axios from "axios";
import { getAuthTokenId } from "./cookie";

const axiosInstance = axios.create({
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const tokenId = getAuthTokenId();
    if (tokenId) {
      config.headers["x-auth-header"] = tokenId;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
