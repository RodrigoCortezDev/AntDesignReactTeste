import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStore, RootDispatcher } from '../../Redux';
import * as Sc from './styled';
import { useQuery } from 'react-query';
import getData from '../../Redux/getData';
import { Chart } from '@antv/g2';

export default function Usuario() {
	//REDUX - 1 forma
	// const { login, theme } = useSelector<IStore, IStore>((state: IStore) => {
	// 	return {
	// 		login: state.login,
	// 		theme: state.theme,
	// 	};
	// });
	// const dispatch = useDispatch();
	// const rootDispatcher = new RootDispatcher(dispatch);

	//REDUX - 2 forma
	const { login, theme, user } = useSelector((store: IStore) => store);
	const rootDispatcher = new RootDispatcher(useDispatch());

	const { status, data } = useQuery('dataAth', getData, {
		refetchIntervalInBackground: true,
		refetchInterval: 5000,
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		// const data2 = [
		// 	{ genre: 'Sports', sold: 275 },
		// 	{ genre: 'Strategy', sold: 115 },
		// 	{ genre: 'Action', sold: 120 },
		// 	{ genre: 'Shooter', sold: 350 },
		// 	{ genre: 'Other', sold: 150 },
		// ];
		// // Step 1: Create a Chart instance.
		// const chart = new Chart({
		// 	container: 'c1', // Specify chart container ID
		// 	width: 600, // Specify chart width
		// 	height: 300, // Specify chart height
		// });
		// // Step 2: Load the data.
		// chart.data(data2);
		// // Step 3: Declare the grammar of graphics, draw column chart.
		// chart.interval().position('genre*sold');
		// // Step 4: Render chart.
		// chart.render();
	}, []);

	return (
		<Sc.Container>
			Usuário: {login}. thema: {theme}, UserName: {user.name}
			<br />
			<Button
				onClick={() => {
					rootDispatcher.updateLogin('Rodrigo');
				}}
			>
				Clique aqui
			</Button>
			<br />
			<p>
				{status} - Data: {JSON.stringify(data)}{' '}
			</p>
			<Link to="/"> Voltar a Home </Link>
			<br />
			<div id="c1"></div>
		</Sc.Container>
	);
}
