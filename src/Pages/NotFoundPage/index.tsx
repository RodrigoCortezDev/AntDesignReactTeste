import React from 'react';
import { Button, InputNumber } from 'antd';
import * as Sc from './styled';

export default function NotFoundPage() {
	return (
		<Sc.Container>
			<InputNumber data-testid="2" id="2">
				15
			</InputNumber>
			<Button>OK</Button>
			<a href="/home">Home</a>
		</Sc.Container>
	);
}
