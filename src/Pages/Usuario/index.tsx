import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStore, RootDispatcher } from '../../Redux';
import * as Sc from './styled';

export default function Usuario() {
	const { login, theme } = useSelector<IStore, IStore>((state: IStore) => {
		return {
			login: state.login,
			theme: state.theme,
		};
	});

	const dispatch = useDispatch();
	const rootDispatcher = new RootDispatcher(dispatch);

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
			<Link to="/">Voltar a Home</Link>
		</Sc.Container>
	);
}
