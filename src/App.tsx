import React from 'react';
import Routes from './routes';

import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

function App() {
	return (
		<ConfigProvider locale={ptBR}>
			<Routes />
		</ConfigProvider>
	);
}

export default App;
