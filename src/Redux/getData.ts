import Api from '../Api';

interface IJsonReturn {
	login: string;
	theme: string;
}

export default async function getData(): Promise<IJsonReturn> {
	return Api.get<IJsonReturn>('/appointments', {
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(res => {
		return res.data;
	});

	// return fetch('http://localhost:3333/appointments', {
	// 	headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
	// }).then((res: Response) => {
	// 	console.log(res);
	// 	return res.json();
	// });
}
