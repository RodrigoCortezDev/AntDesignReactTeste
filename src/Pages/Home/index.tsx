import React from 'react';
import * as Sc from './styled';
import Master from '../Master';

export default function Home() {
	return (
		<Master headerText="Home page">
			<Sc.Container>Home</Sc.Container>
			<Sc.MyDatePicker format="DD/MM/yyyy">Escolha a data</Sc.MyDatePicker>
			<Sc.MyButton
				onClick={() => {
					alert('teste');
				}}
			>
				Clique aqui
			</Sc.MyButton>
		</Master>
	);
}
