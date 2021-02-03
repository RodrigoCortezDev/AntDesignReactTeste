import React from 'react';
import Routes from './routes';

import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import { AuthProvider } from './Providers/Auth';

function App() {
	return (
		<ConfigProvider locale={ptBR}>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</ConfigProvider>
	);
}

export default App;
