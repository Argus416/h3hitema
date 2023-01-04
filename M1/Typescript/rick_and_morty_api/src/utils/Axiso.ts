import { API_URL } from "../config";
import { Axios, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
	baseURL: API_URL,
	responseType: "json",
};

const axios = new Axios(config);

export default axios;
