import styled, { css } from 'styled-components';

export const centerFlex = css`
	justify-content: center;
	align-items: center;
`;
export const BaseView = styled.View`
	${centerFlex};
	background-color: ${props => props.theme.background};
`;
export const FlexRowAlignCenter = styled.View`
	flex-direction: row;
	align-items: center;
`;
export const FlexColumn = styled.View`
	${centerFlex};
`;
