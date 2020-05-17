import styled, { css } from 'styled-components';
import { Colors } from "../Lib/constants";

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
export const FlexRow = styled.View`
	flex-direction: row;
	${props =>
		props.justifyContent && `justify-content: ${props.justifyContent}`};
	color: ${Colors.MainGreen};
`;
export const flexRow = css`
	flex-direction: row;
`;
export const CenterFlexStretch = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	align-self: stretch;
`;
export const PageWrapper = styled.SafeAreaView`
	background-color: ${props => props.theme.colorPrimary};
	flex: 1;
	align-items: center;
`;
export const OpacityWrapper = styled.View`
	${props=>props.visible ? 'opacity: 1;' : 'opacity: 0;'}
`
