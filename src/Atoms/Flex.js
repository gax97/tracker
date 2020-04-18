import styled, {css} from 'styled-components';

export const centerFlex = css`
	justify-content: center;
	align-items: center;
`;
export const BaseView = styled.View`
	${centerFlex};
	background-color: ${props => props.theme.background};
`;
