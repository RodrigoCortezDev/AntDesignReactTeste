import Api from '../Api';

interface IJsonReturn {
	login: string;
	theme: string;
}

export default async function getData(): Promise<IJsonReturn> {
	return Api.get<IJsonReturn>('api/palavras/2', {
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(res => {
		return res.data;
	});

	// return Api.get<IJsonReturn>('/appointments', {
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// 	params: { mode: 'no-cors' },
	// }).then(res => {
	// 	return res.data;
	// });
}
