import React, { useCallback, useMemo, useState } from 'react';
import * as Sc from './styled';
import Master from '../Master';
import { useAuth } from '../../ContextAPI/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { IStore, RootDispatcher } from '../../Redux';
import { Link } from 'react-router-dom';
import getData from '../../Redux/getData';

export default function Home() {
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
				{auth?.login} - {String(obj.login)} - {String(obj.theme)} - Home
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
			<Sc.AttributeButton
				onClick={() => {
					if (!obj.login) Consultar();
				}}
			>
				Teste
			</Sc.AttributeButton>
			<Link to="/usuario">Ir para Usuario</Link>
		</Master>
	);
}
