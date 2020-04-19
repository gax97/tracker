import React, { useContext, useEffect, useRef } from 'react';
import { Alert, StatusBar } from 'react-native';
import styled from 'styled-components';
import { ThemeManagerContext } from '../../Context/ThemeManager';
import { FlexColumn, FlexRowAlignCenter } from '../../Atoms/Flex';
import { BaseButton } from '../../Atoms/Button';
import { BaseText, Logo } from '../../Atoms/Text';
import {
	BaseDivider,
	BigDivider,
	MediumDivider,
	SmallDivider,
} from '../../Atoms/Dividers';
import { GreenLink } from '../../Atoms/Links';
import { StyledKeyboardAvoidingView } from '../../Atoms/Wrappers';
import { Screens } from '../../Lib/screens';
import { ConfirmButton } from '../../Molecules/Buttons/ConfirmButton';
import Input from '../../Molecules/Input/Input';

const AuthLoginWrapper = styled.SafeAreaView`
	background-color: ${props => props.theme.colorPrimary};
`;

export function AuthSignUp({ navigation }) {
	const ThemeContext = useContext(ThemeManagerContext);
	const usernameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	useEffect(() => {
		console.log(emailRef.current.getValue());
	}, [emailRef.current]);

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<AuthLoginWrapper>
				<StyledKeyboardAvoidingView>
					<BigDivider />
					<Logo>TRACKER</Logo>
					<BigDivider />
					<FlexColumn>
						<Input
							placeholder="username"
							ref={usernameRef}
							onEditingEnd={() => emailRef.current.focus()}
						/>
						<SmallDivider />
						<Input
							placeholder="email"
							ref={emailRef}
							onEditingEnd={() => passwordRef.current.focus()}
						/>
						<SmallDivider />
						<Input
							last
							secure
							placeholder="password"
							type="password"
							ref={passwordRef}
							onEditingEnd={() => Alert.alert('Submited')}
						/>
						<MediumDivider />
						<ConfirmButton text="Sign Up" />
						<SmallDivider />
						<FlexRowAlignCenter>
							<BaseText>Already a member?</BaseText>
							<GreenLink
								text="SIGN IN"
								onPress={() => navigation.navigate(Screens.Login)}
							/>
						</FlexRowAlignCenter>
						<BaseDivider />
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
