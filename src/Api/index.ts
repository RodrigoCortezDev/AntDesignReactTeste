import Axios from 'axios';

//http://localhost:56003
//https://localhost:44362

const Api = Axios.create({
	baseURL: 'http://localhost:3333/',
});

export default Api;
