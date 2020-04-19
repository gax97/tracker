import React, { useContext } from 'react';
import {
	SafeAreaView,
	StatusBar,
	Text,
	TextInput,
	View,
	Alert,
	TouchableWithoutFeedback,
} from 'react-native';
import { BaseView, centerFlex } from '../Atoms/Flex';
import { BaseButton } from '../Atoms/Button';
import {
	ThemeManager,
	ThemeManagerContext,
	Themes,
} from '../Context/ThemeManager';
import { BaseText } from '../Atoms/Text';
import styled, { css, useTheme } from 'styled-components';
import {
	BaseDivider,
	BigDivider,
	MediumDivider,
	SmallDivider,
} from '../Atoms/Dividers';
import { OpenEye, ClosedEye } from '../Atoms/Icons/svg';
import { GreenLink } from '../Atoms/Links';
import { Screens } from '../Lib/screens';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
	padding-left: 20px;
	padding-right: 20px;
	height: 100%;
	background-color: ${props => props.theme.colorPrimary};
`;
const AuthLoginWrapper = styled.SafeAreaView`
	background-color: ${props => props.theme.colorPrimary};
`;
const Logo = styled.Text`
	color: #20c284;
	font-size: 32px;
	align-self: center;
	font-weight: bold;
`;
const placeholderTextStyle = css`
	font-style: italic;
	font-size: 14px;
`;
const inputTextStyle = css`
	font-style: normal;
	font-size: 16px;
`;
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

const Input = ({ placeholder, icon, type }) => {
	const [value, onChangeText] = React.useState('');
	const currentTheme = useTheme();
	const [passwordVisible, setPasswordVisible] = React.useState(
		type === 'password',
	);

	return (
		<View style={{ width: '100%', position: 'relative' }}>
			<StyledTextInput
				autoCapitalize="none"
				onChangeText={text => onChangeText(text)}
				placeholder={placeholder}
				placeholderTextColor={currentTheme.text.color.primary}
				textContentType="emailAddress"
				value={value}
				placeholderVisible={value.length === 0}
				secureTextEntry={passwordVisible}
				// returnKeyType="done"
			/>
			{type === 'password' && (
				<PasswordEye
					onPress={() => setPasswordVisible(prevState => !prevState)}
					visible={passwordVisible}
				/>
			)}
			{icon}
		</View>
	);
};
const StyledButton = styled(BaseButton)`
	background-color: #20c284;
	color: white;
	width: 100%;
	height: 40px;
	border-radius: 18px;
`;

const Button = ({ text, onPress }) => {
	return (
		<StyledButton onPress={onPress}>
			<Text>{text}</Text>
		</StyledButton>
	);
};
const FlexRow = styled.View`
	flex-direction: row;
`;
const FlexColumn = styled.View`
	${centerFlex};
`;

const PasswordEye = ({ visible, onPress }) => {
	if (visible) {
		return (
			<TouchableWithoutFeedback onPress={onPress}>
				<View style={{ position: 'absolute', right: 5, top: 25 }}>
					<OpenEye />
				</View>
			</TouchableWithoutFeedback>
		);
	}

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={{ position: 'absolute', right: 5, top: 25 }}>
				<ClosedEye />
			</View>
		</TouchableWithoutFeedback>
	);
};

export function AuthLogin({ navigation }) {
	const ThemeContext = useContext(ThemeManagerContext);

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<AuthLoginWrapper>
				<StyledKeyboardAvoidingView>
					<BigDivider />
					<Logo>TRACKER</Logo>
					<BigDivider />
					<FlexColumn>
						<Input placeholder="email" />
						<SmallDivider />
						<Input secure placeholder="password" type="password" />
						<MediumDivider />
						<Button text="Sign In" />
						<SmallDivider />
						<BaseText>Already a member?</BaseText>
						<BaseDivider />
						<GreenLink
							text={'SIGN IN'}
							onPress={() => navigation.push(Screens.SignUp)}
						/>
						<SmallDivider />
						<BaseButton onPress={ThemeContext.toggleTheme}>
							<BaseText>Change theme</BaseText>
						</BaseButton>
					</FlexColumn>
				</StyledKeyboardAvoidingView>
			</AuthLoginWrapper>
		</>
	);
}
