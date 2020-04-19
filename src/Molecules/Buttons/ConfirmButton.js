import React from 'react';
import styled from 'styled-components';
import { BaseText } from '../../Atoms/Text';
import { BaseButton } from '../../Atoms/Button';

export const ConfirmButton = ({ text, onPress }) => {
	return (
		<ConfirmButton.Wrapper onPress={onPress}>
			<BaseText>{text}</BaseText>
		</ConfirmButton.Wrapper>
	);
};
ConfirmButton.Wrapper = styled(BaseButton)`
	background-color: #20c284;
	color: white;
	width: 100%;
	height: 40px;
	border-radius: 18px;
`;
