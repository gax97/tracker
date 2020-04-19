import styled, { css } from 'styled-components';

export const BaseText = styled.Text`
	color: ${props => props.theme.text.color.primary};
`;
export const Logo = styled.Text`
	color: #20c284;
	font-size: 32px;
	align-self: center;
	font-weight: bold;
`;
export const placeholderTextStyle = css`
	font-style: italic;
	font-size: 14px;
`;
export const inputTextStyle = css`
	font-style: normal;
	font-size: 16px;
`;
