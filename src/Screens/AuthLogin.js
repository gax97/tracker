import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, Text, TextInput, View } from 'react-native';
import { BaseView, centerFlex } from '../Atoms/Flex';
import { BaseButton } from '../Atoms/Button';
import {
	ThemeManager,
	ThemeManagerContext,
	Themes,
} from '../Context/ThemeManager';
import { BaseText } from '../Atoms/Text';
import styled from 'styled-components';
import { BigDivider, MediumDivider, SmallDivider } from '../Atoms/Dividers';

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
	font-size: 26px;
	align-self: center;
`;
const StyledTextInput = styled.TextInput`
	color: white;
	height: 50px;
	border-radius: 1px;
	align-self: stretch;
	border-bottom-color: gray;
	border-bottom-width: 2.5px;
	padding-left: 10px;
	padding-right: 10px;
	padding-top: 10px;
`;

const Input = ({ placeholder }) => {
	const [value, onChangeText] = React.useState();

	return (
		<View style={{ width: '100%', position: 'relative' }}>
			<StyledTextInput
				autoCapitalize="none"
				onChangeText={text => onChangeText(text)}
				placeholder={placeholder}
				placeholderTextColor="white"
				textContentType="emailAddress"
				value={value}
				// returnKeyType="done"
			/>
			<Text style={{ position: 'absolute', right: 0, bottom: 10, color: 'white' }}>show</Text>
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

export function AuthLogin() {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<AuthLoginWrapper>
				<StyledKeyboardAvoidingView behavior="padding">
					<BigDivider />
					<Logo>TRACKER</Logo>
					<BigDivider />
					<FlexColumn>
						<Input placeholder="email" />
						<SmallDivider />
						<Input placeholder="password" />
						<MediumDivider />
						<Button text="Sign In" />
						<MediumDivider />
						<FlexRow>
							<Text>Or </Text>
							<Text>Sign Up</Text>
						</FlexRow>
					</FlexColumn>
				</StyledKeyboardAvoidingView>
			</AuthLoginWrapper>
		</>
	);
}
