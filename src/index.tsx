import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './ContextAPI/Auth';
import { Provider } from 'react-redux';
import { store } from './Redux';

//Coloquei o Redux aqui pois a configuração do Store foi feita no App
//E o provider precisa estar um nivel acima

ReactDOM.render(
	//<React.StrictMode>
	<>
		<Provider store={store}>
			<AuthProvider>
				<App />
			</AuthProvider>
		</Provider>
	</>,
	//</React.StrictMode>,
	document.getElementById('root'),
);
