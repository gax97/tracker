import React, { useCallback, useContext, useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';
import { ThemeManagerContext } from '../../Context/ThemeManager';
import { FlexColumn, FlexRowAlignCenter } from '../../Atoms/Flex';
import { BaseButton } from '../../Atoms/Button';
import { BaseText, ErrorMessage, Logo } from '../../Atoms/Text';
import {
	BaseDivider,
	BigDivider,
	MediumDivider,
	SmallDivider,
} from '../../Atoms/Dividers';
import { GreenLink } from '../../Atoms/Links';
import { Overlay, StyledKeyboardAvoidingView } from '../../Atoms/Wrappers';
import { Screens } from '../../Lib/screens';
import { ConfirmButton } from '../../Molecules/Buttons/ConfirmButton';
import Input from '../../Molecules/Input/Input';
import { UserManagerContext } from '../../Context/UserManager';
import UserService from '../../Lib/services/UserService';
import { Loader } from '../../Atoms/Loaders';

const AuthLoginWrapper = styled.SafeAreaView`
	background-color: ${props => props.theme.colorPrimary};
`;

export function AuthSignUp({ navigation }) {
	const ThemeContext = useContext(ThemeManagerContext);
	const { login } = useContext(UserManagerContext);
	const [errorMessage, setErrorMessage] = useState(null);
	const [loading, setLoading] = useState(false);
	const emailRef = useRef();
	const usernameRef = useRef();
	const passwordRef = useRef();

	const handleSignUp = useCallback(async () => {
		setLoading(true);

		try {
			const response = await UserService.signUp(
				emailRef.current.getValue(),
				usernameRef.current.getValue(),
				passwordRef.current.getValue(),
			);
			const { user, accessToken } = response.data;
			login(
				user.fullName,
				user.email,
				accessToken.accessToken,
				accessToken.refreshToken,
			);
		} catch (error) {
			setErrorMessage(error.response.data.message);
		} finally {
			setLoading(false);
		}
	}, []);

	return (
		<>
			<AuthLoginWrapper>
				<StyledKeyboardAvoidingView>
					<BigDivider />
					<Logo>TRACKER</Logo>
					<BigDivider />
					{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
							onEditingEnd={handleSignUp}
						/>
						<MediumDivider />
						<ConfirmButton text="Sign Up" onPress={handleSignUp} />
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
			{loading && (
				<Overlay>
					<Loader color="white" size="large" />
				</Overlay>
			)}
		</>
	);
}
