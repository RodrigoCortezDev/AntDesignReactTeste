import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStore, RootDispatcher } from '../../Redux';
import * as Sc from './styled';
import { useQuery } from 'react-query';
import getData from '../../Redux/getData';

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
	const { login, theme } = useSelector((store: IStore) => store);
	const rootDispatcher = new RootDispatcher(useDispatch());

	const { status, data } = useQuery('dataAth', getData);

	return (
		<Sc.Container>
			Usuário: {login}. thema: {theme}
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
		</Sc.Container>
	);
}
