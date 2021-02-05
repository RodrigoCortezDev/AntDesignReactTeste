import React, { useState } from 'react';
import { AnyStyledComponent } from 'styled-components';

//Interface do objeto que efetivamente quero quardar
interface IAuth {
	login?: string;
	theme?: string;
}

//=================================================================
//Context =========================================================
//Type de retornno do Context
interface AuthContextType {
	auth: IAuth;
	setAuth: (auth: IAuth) => void;
}

const AuthContext = React.createContext<AuthContextType>({
	auth: {},
	setAuth: auth => {},
});
//hook para facilitar uso
export const useAuth = () => React.useContext(AuthContext);

//=================================================================
//Provider ========================================================
//Interface do provider que vai envolver outros componentes
interface IAuthProvider {
	children: React.ReactElement[] | React.ReactElement | AnyStyledComponent[] | AnyStyledComponent;
}

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [auth, setAuth] = useState<IAuth>({ login: 'Inicial' });

	React.useEffect(() => {
		console.log('entrou');
	}, [auth]);

	return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
