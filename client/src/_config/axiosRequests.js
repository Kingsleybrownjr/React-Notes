import axios from 'axios';
const BASEURL = 'https://localhost:7009/notes';

export const AxiosGetRequest = async () => {
	const response = await axios.get(`${BASEURL}`);
	return response.data;
};

export const AxiosDeleteRequest = async id =>
	await axios.delete(`${BASEURL}/${id}`);

export const AxiosEditNote = async note => await axios.put(`${BASEURL}`, note);

export const AxiosCreateNote = async note =>
	await axios.post(`${BASEURL}`, note);
