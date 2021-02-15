import React, { useCallback, useMemo, useState } from 'react';
import * as Sc from './styled';
import Master from '../Master';
import { useAuth } from '../../ContextAPI/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { IStore, RootDispatcher } from '../../Redux';
import { Link } from 'react-router-dom';
import getData from '../../Redux/getData';
import { useQuery } from 'react-query';

export default function Home() {
	//react query
	const { status, data } = useQuery('dataAth', getData, {
		refetchIntervalInBackground: true,
		refetchInterval: 5000,
		refetchOnWindowFocus: false,
	});

	//States
	const [loading, setLoading] = useState(false);

	const dispacher = useDispatch();
	const rootDispatcher = useMemo(() => new RootDispatcher(dispacher), [dispacher]);

	const Consultar = useCallback(async () => {
		setLoading(true);
		await getData()
			.then(resp => {
				rootDispatcher.updateCustom(resp);
				setLoading(false);
			})
			.catch(erro => {
				rootDispatcher.updateCustom({ login: erro, theme: '' });
				setLoading(false);
			});
	}, [rootDispatcher]);

	// useEffect(() => {
	// 	Consultar();
	// }, [Consultar]);

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
	const obj = useSelector((store: IStore) => store);
	//const login = useSelector((store: IStore) => store.login);
	//const theme = useSelector((store: IStore) => store.theme);

	return loading ? (
		<Sc.MySpin size="large" />
	) : (
		<Master headerText="Home page">
			<Sc.Container>
				{auth?.login} - {obj.login} - {obj.theme} - {obj.user.name}
			</Sc.Container>
			<Sc.MyDatePicker format="DD/MM/yyyy">Escolha a data</Sc.MyDatePicker>
			<Sc.MyButton
				onClick={() => {
					setAuth({ login: new Date().toLocaleString(), theme: '1' });
					rootDispatcher.updateCustom({ login: 'Rodrigo Novo' });
					rootDispatcher.updateTheme('Thema 2');
					rootDispatcher.updateUser({ age: 10 });
					rootDispatcher.updateUserName('UserNameLegal 2');
				}}
			>
				Clique aqui
			</Sc.MyButton>
			<Sc.AttributeButton
				onClick={() => {
					if (!obj.login) Consultar();
				}}
			>
				Teste
			</Sc.AttributeButton>
			<Link to="/usuario">Ir para Usuario</Link>
			<br />
			<p>
				{status} - Data: {JSON.stringify(data)}{' '}
			</p>
		</Master>
	);
}
