import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BaseButton } from '../../Atoms/Button';

export const ConfirmButton = ({ text, onPress }) => {
	return (
		<ConfirmButton.Wrapper onPress={onPress}>
			<ConfirmButton.Text>{text}</ConfirmButton.Text>
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
ConfirmButton.Text = styled.Text`
	color: ${props => props.theme.text.color.primary};
	font-size: 16px;
`;
ConfirmButton.propTypes = {
	onPress: PropTypes.func,
	text: PropTypes.string,
};
