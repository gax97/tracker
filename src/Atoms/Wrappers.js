import styled from "styled-components";

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
	padding-left: 20px;
	padding-right: 20px;
	height: 100%;
	background-color: ${props => props.theme.colorPrimary};
`;
export const RelativeWrapper = styled.View`
	width: 100%;
	position: relative;
`;
