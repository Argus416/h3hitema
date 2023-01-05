import { API_URL } from "../config";
import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
	baseURL: API_URL,
	responseType: "json",
};

const Axios = axios.create(config);

export default Axios;
