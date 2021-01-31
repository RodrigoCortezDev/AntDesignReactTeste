import styled from 'styled-components';
import { DatePicker, Button } from 'antd';

export const Container = styled.div`
	display: flex;
`;

export const MyDatePicker = styled(DatePicker)`
	background-color: aliceblue;
`;

export const MyButton = styled(Button)`
	background-color: red;
	&:focus {
		background-color: green;
	}
	&:hover {
		background-color: black;
	}
`;

export const AttributeButton = styled(Button).attrs(props => {
	//const { type = 'button', danger  = true } = props;
	return { type: 'ghost', danger: true };
})`
	background-color: red;
`;

export const PropsBox = styled.div(() => ({
	background: 'red',
	height: '50px',
	width: '50px',
}));
