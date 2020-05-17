import styled, { css } from 'styled-components';
import { centerFlex } from './Flex';

export const BaseButton = styled.TouchableOpacity`
	${centerFlex};
	background-color: ${props => props.theme.buttonPrimary};
	width: 200px;
`;
