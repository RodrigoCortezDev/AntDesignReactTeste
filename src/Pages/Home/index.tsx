import React from 'react';
import * as Sc from './styled';
import Master from '../Master';
import { useAuth } from '../../Providers/Auth';

export default function Home() {
	const { auth, setAuth } = useAuth();

	return (
		<Master headerText="Home page">
			<Sc.Container>{auth?.login} Home</Sc.Container>
			<Sc.MyDatePicker format="DD/MM/yyyy">Escolha a data</Sc.MyDatePicker>
			<Sc.MyButton
				onClick={() => {
					setAuth({ login: new Date().toLocaleString(), theme: '1' });
				}}
			>
				Clique aqui
			</Sc.MyButton>
			<Sc.AttributeButton>Teste</Sc.AttributeButton>
		</Master>
	);
}
