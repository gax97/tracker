import React from 'react';
import styled, { css } from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native';

const StyledLink = styled.TouchableWithoutFeedback``;
const GreenText = styled.Text`
	color: #20c284;
	font-size: 16px;
	text-decoration: underline;
	text-decoration-color: #20c284;
`;

export const GreenLink = ({ text, onPress }) => {
	return (
		<StyledLink onPress={onPress}>
			<GreenText> {text}</GreenText>
		</StyledLink>
	);
};
