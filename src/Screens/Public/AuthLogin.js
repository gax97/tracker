import React, { useCallback, useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from '../../Context/ThemeManager';
import { FlexColumn, FlexRowAlignCenter } from '../../Atoms/Flex';
import { BaseButton } from '../../Atoms/Button';
import { BaseText, ErrorMessage, Logo } from '../../Atoms/Text';
import { BaseDivider, BigDivider, MediumDivider, SmallDivider, } from '../../Atoms/Dividers';
import { GreenLink } from '../../Atoms/Links';
import { StyledKeyboardAvoidingView } from '../../Atoms/Wrappers';
import { Screens } from '../../Lib/screens';
import { ConfirmButton } from '../../Molecules/Buttons/ConfirmButton';
import Input from '../../Molecules/Input/Input';
import UserService from '../../Lib/services/UserService';
import { UserManagerContext } from '../../Context/UserManager';
import { OverlayLoader } from '../../Atoms/Loaders';

const AuthLoginWrapper = styled.SafeAreaView`
	background-color: ${props => props.theme.colorPrimary};
`;

export function AuthLogin({ navigation }) {
	const ThemeContext = useContext(ThemeManagerContext);
	const { login } = useContext(UserManagerContext);
	const [errorMessage, setErrorMessage] = useState(null);
	const [loading, setLoading] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();

	const handleSignIn = useCallback(async () => {
		setLoading(true);

		try {
			const response = await UserService.signIn(
				emailRef.current.getValue(),
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
							ref={emailRef}
							placeholder="email"
							onEditingEnd={() => passwordRef.current.focus()}
						/>
						<SmallDivider />
						<Input
							last
							secure
							type="password"
							ref={passwordRef}
							placeholder="password"
							onEditingEnd={handleSignIn}
						/>
						<MediumDivider />
						<ConfirmButton text="Sign In" onPress={handleSignIn} />
						<SmallDivider />
						<FlexRowAlignCenter>
							<BaseText>Not a member?</BaseText>
							<GreenLink
								text="SIGN UP"
								onPress={() => navigation.navigate(Screens.SignUp)}
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
			<OverlayLoader loading={loading} />
		</>
	);
}
