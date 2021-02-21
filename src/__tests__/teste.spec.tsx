import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../Pages/NotFoundPage';
import Usuario from '../Pages/Usuario';

//===========================================================================
//Teste carregamento de pagina Usuário
jest.mock('react-redux', () => {
	return {
		useSelector: () => ({ login: 'Rodrigo', theme: 'teste', user: { name: 'Teste' } }),
		useDispatch: () => jest.fn(),
	};
});

jest.mock('react-query', () => {
	return {
		useQuery: () => ({ status: 'Rodrigo', data: {} }),
	};
});

jest.mock('react-router-dom', () => {
	return {
		Link: () => '',
	};
});

describe('Teste de pagina Usuario', () => {
	it('Carregando pagina', () => {
		const { debug } = render(<Usuario />);
		const bt = screen.getByText('Clique aqui');
		expect(bt).toBeTruthy();
	});
});

//===========================================================================
//Teste carregamento de pagina NotFound
describe('Teste de pagina NotFound', () => {
	it('Carregando pagina', () => {
		const { debug } = render(<NotFoundPage />);
		const link = screen.getByText('Home');
		const bt = screen.getByText('OK');

		expect(link).toBeTruthy();
		expect(bt).toBeTruthy();
	});
});
