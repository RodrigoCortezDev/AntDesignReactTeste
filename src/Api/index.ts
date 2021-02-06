import Axios from 'axios';

const base = 'http://localhost:56003/';
//const base = 'https://localhost:56003';
//const base = 'https//localhost:3000';

const Api = Axios.create({
	baseURL: base,
});

export default Api;
