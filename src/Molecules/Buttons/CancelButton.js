import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BaseButton } from '../../Atoms/Button';

export const CancelButton = ({ text, onPress }) => {
	return (
		<CancelButton.Wrapper onPress={onPress}>
			<CancelButton.Text>{text}</CancelButton.Text>
		</CancelButton.Wrapper>
	);
};
CancelButton.Wrapper = styled(BaseButton)`
	background-color: #db5050;
	color: white;
	width: 100%;
	height: 40px;
	border-radius: 18px;
`;
CancelButton.Text = styled.Text`
	color: white;
	font-size: 16px;
`;
CancelButton.propTypes = {
	onPress: PropTypes.func,
	text: PropTypes.string,
};
