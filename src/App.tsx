import React from 'react';
import Routes from './routes';

import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useStore } from 'react-redux';

function App() {
	//Foi definido aqui pois o provider precisa estar um nivel acima
	//E coloquei no App para não ser chamado varias vezes.
	const store = useStore();
	store.subscribe(() => {
		const state = store.getState();
		localStorage.setItem('store', JSON.stringify(state));
	});

	return (
		<ConfigProvider locale={ptBR}>
			<QueryClientProvider client={new QueryClient()}>
				<Routes />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ConfigProvider>
	);
}

export default App;
