import React from 'react';
import * as Sc from './styled';
import Master from '../Master';
import { useAuth } from '../../ContextAPI/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { IStore, RootDispatcher } from '../../Redux';
import { Link } from 'react-router-dom';

export default function Home() {
	//Context API
	const { auth, setAuth } = useAuth();

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

	return (
		<Master headerText="Home page">
			<Sc.Container>
				{auth?.login} - {String(login)} - {String(theme)} - Home
			</Sc.Container>
			<Sc.MyDatePicker format="DD/MM/yyyy">Escolha a data</Sc.MyDatePicker>
			<Sc.MyButton
				onClick={() => {
					setAuth({ login: new Date().toLocaleString(), theme: '1' });
					rootDispatcher.updateCustom({ login: 'XXXXXXX' });
					rootDispatcher.updateTheme('Thema 1');
				}}
			>
				Clique aqui
			</Sc.MyButton>
			<Sc.AttributeButton>Teste</Sc.AttributeButton>
			<Link to="/usuario">Ir para Usuario</Link>
		</Master>
	);
}
