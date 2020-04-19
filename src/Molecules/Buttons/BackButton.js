import styled from 'styled-components';
import React from 'react';

export const BackButton = ({ onPress }) => {
	return (
		<BackButton.Wrapper onPress={onPress}>
			<BackButton.Text>Back</BackButton.Text>
		</BackButton.Wrapper>
	);
};
BackButton.Wrapper = styled.TouchableOpacity`
	height: 50px;
	flex: 1;
`;
BackButton.Text = styled.Text`
	color: ${props => props.theme.text.color.primary};
	font-size: 28px;
`;
