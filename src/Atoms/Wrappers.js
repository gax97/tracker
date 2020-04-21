import styled, { css } from "styled-components";

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
export const overlayCss = css`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
`;
export const Overlay = styled.View`
	${overlayCss};
	background-color: rgba(0, 0, 0, 0.7);
`;
