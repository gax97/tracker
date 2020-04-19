import { TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import styled from 'styled-components';
import { OpenEye } from '../Atoms/Icons/Svg/OpenEye';
import { ClosedEye } from '../Atoms/Icons/Svg/ClosedEye';

export const PasswordEyeIcon = ({ visible, onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<PasswordEyeIcon.Wrapper>
				{visible ? <OpenEye /> : <ClosedEye />}
			</PasswordEyeIcon.Wrapper>
		</TouchableWithoutFeedback>
	);
};
PasswordEyeIcon.Wrapper = styled.View`
	position: absolute;
	right: 5px;
	top: 25px;
`;
