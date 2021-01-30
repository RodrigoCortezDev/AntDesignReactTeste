import React from 'react';
import { AnyStyledComponent } from 'styled-components';
import * as Sc from './styled';

interface IProps {
	headerText: string;
	children: React.ReactElement[] | React.ReactElement | AnyStyledComponent | AnyStyledComponent[] | string;
}

export default function Master({ children, headerText }: IProps) {
	return (
		<Sc.ContainerMaster>
			<Sc.Header>{headerText}</Sc.Header>
			<Sc.ContainerBody>{children}</Sc.ContainerBody>
		</Sc.ContainerMaster>
	);
}
