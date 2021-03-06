import React, { useImperativeHandle } from 'react';
import styled, { useTheme } from 'styled-components';
import { inputTextStyle, placeholderTextStyle } from '../../Atoms/Text';
import { RelativeWrapper } from '../../Atoms/Wrappers';
import { PasswordEyeIcon } from '../PasswordEyeIcon';

const StyledTextInput = styled.TextInput`
	color: ${props => props.theme.text.color.primary};
	height: 50px;
	border-radius: 1px;
	align-self: stretch;
	border-bottom-color: gray;
	border-bottom-width: 2.5px;
	padding-left: 10px;
	padding-right: 10px;
	padding-top: 10px;
	${props =>
		props.placeholderVisible ? placeholderTextStyle : inputTextStyle};
`;

const Input = ({ placeholder, type, last, onEditingEnd }, ref) => {
	const [value, onChangeText] = React.useState('');
	const currentTheme = useTheme();
	const localRef = React.useRef();
	const [passwordVisible, setPasswordVisible] = React.useState(
		type === 'password',
	);
	useImperativeHandle(ref, () => ({
		hasError: () => {},
		getValue: () => value,
		resetState: () => {},
		setValue: () => {},
		focus: () => localRef.current.focus(),
	}));

	return (
		<RelativeWrapper>
			<StyledTextInput
				ref={localRef}
				autoCapitalize="none"
				onChangeText={text => onChangeText(text)}
				placeholder={placeholder}
				placeholderTextColor={currentTheme.text.color.primary}
				textContentType="emailAddress"
				value={value}
				placeholderVisible={value.length === 0}
				secureTextEntry={passwordVisible}
				enablesReturnKeyAutomatically
				returnKeyType={last ? 'done' : 'next'}
				onSubmitEditing={onEditingEnd}
			/>
			{type === 'password' && (
				<PasswordEyeIcon
					visible={passwordVisible}
					onPress={() => setPasswordVisible(prevState => !prevState)}
				/>
			)}
		</RelativeWrapper>
	);
};
export default React.forwardRef(Input);
