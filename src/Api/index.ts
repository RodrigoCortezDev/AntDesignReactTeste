import Axios from 'axios';

//const base = 'http://localhost:56003/';
const base = 'https://localhost:56003';
//const base = 'http//localhost:3333';

const Api = Axios.create({
	baseURL: base,
});

export default Api;
