import React from 'react';
import Routes from './routes';

import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import { AuthProvider } from './ContextAPI/Auth';
import { Provider } from 'react-redux';
import { store } from './Redux';

function App() {
	return (
		<ConfigProvider locale={ptBR}>
			<Provider store={store}>
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</Provider>
		</ConfigProvider>
	);
}

export default App;
