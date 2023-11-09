import axios from 'axios';
import { BASE_URL } from '../config';

const axiosClient = axios.create({
	baseURL: BASE_URL,
});

export default axiosClient;
