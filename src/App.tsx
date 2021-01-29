import React from 'react';
import { DatePicker, Button, Upload } from 'antd';

function App() {
	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			<DatePicker />
			<Button size={'large'} shape={'round'} type={'primary'}>
				Teste
			</Button>
			<Upload type={'select'}>aaaaaaaaaaaaaa</Upload>
		</div>
	);
}

export default App;
