import { API_KEY } from "./../config/index";
import { API_URL } from "../config";
import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
	baseURL: API_URL,
	responseType: "json",

	headers: {
		"X-RapidAPI-Key": API_KEY,
		"X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
	},
};

const Axios = axios.create(config);

export default Axios;
