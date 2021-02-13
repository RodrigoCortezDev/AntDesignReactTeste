import { Action, createStore, Dispatch, Reducer } from 'redux';

//==============================================================
//Tipo do objeto a ser armazenado
export interface IStore {
	login?: string;
	theme?: string;
}

//==============================================================
//Tipo do Dispatch
export interface IDispatchAction extends Action {
	partialData?: Partial<IStore>; //usado para passar partes do objeto no reducer
	data?: IStore; //usado para passar o objeto completo
}

//==============================================================
//Objeto inicial a ser armazenado
function getLocalStorage() {
	try {
		return JSON.parse(localStorage.getItem('store') || '') as IStore;
	} catch {
		return {
			login: '',
			theme: '',
		};
	}
}

export const initialState: IStore = getLocalStorage();

//==============================================================
//Enumerados com as ações possiveis
export enum ActionType {
	UpdateLogin,
	UpdateTheme,
	DeleteLogin,
	UpdateCustom,
}

//==============================================================
//Reducer que recebe as ações do Dispatcher e realiza a alteração de estado
export const rootReducer: Reducer<IStore, IDispatchAction> = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.UpdateLogin:
			return { ...state, login: action.partialData?.login || initialState.login };
		case ActionType.DeleteLogin:
			return { ...state, login: '' };
		case ActionType.UpdateTheme:
			return { ...state, theme: action.partialData?.theme || initialState.theme };
		case ActionType.UpdateCustom:
			return { ...state, ...(action.data || initialState) };
		default:
			return state;
	}
};

//==============================================================
//Dispatcher que tem as ações que são chamadas das telas e que repassa para o reducer
export class RootDispatcher {
	private readonly dispatch: Dispatch<IDispatchAction>;

	constructor(dispatch: Dispatch<IDispatchAction>) {
		this.dispatch = dispatch;
	}

	updateLogin = (login: string) => this.dispatch({ type: ActionType.UpdateLogin, partialData: { login } });

	updateTheme = (theme: string) => this.dispatch({ type: ActionType.UpdateTheme, partialData: { theme } });

	updateCustom = (obj: IStore) => this.dispatch({ type: ActionType.UpdateCustom, data: obj });

	deleteLogin = () => this.dispatch({ type: ActionType.DeleteLogin, partialData: {} });
}

//==============================================================
//Objeto resposavel pelo Store que é definido no inicio do projeto (no arquivo App.tsx)
export const store = createStore<IStore, IDispatchAction, null, null>(rootReducer);
