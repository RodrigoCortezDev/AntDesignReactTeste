import React from 'react';
import Routes from './routes';

import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import { AuthProvider } from './ContextAPI/Auth';
import { Provider } from 'react-redux';
import { store } from './Redux';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
	const queryClient = new QueryClient();

	return (
		<ConfigProvider locale={ptBR}>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<AuthProvider>
						<Routes />
					</AuthProvider>
				</Provider>
			</QueryClientProvider>
		</ConfigProvider>
	);
}

export default App;
