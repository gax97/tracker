import React, {
	useContext,
	useEffect,
	useRef,
	useCallback,
	useState,
} from 'react';
import { ActivityIndicator, Alert, StatusBar, Text } from 'react-native';
import styled, { css } from 'styled-components';
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
import { StyledKeyboardAvoidingView } from '../../Atoms/Wrappers';
import { Screens } from '../../Lib/screens';
import { ConfirmButton } from '../../Molecules/Buttons/ConfirmButton';
import Input from '../../Molecules/Input/Input';
import Api from '../../Lib/api';
import { UserManagerContext } from '../../Context/UserManager';
import qs from 'qs';
import UserService from '../../Lib/services/UserService';

const AuthLoginWrapper = styled.SafeAreaView`
	background-color: ${props => props.theme.colorPrimary};
`;
const overlayCss = css`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
`;
const Overlay = styled.View`
	${overlayCss};
	background-color: rgba(0, 0, 0, 0.7);
`;
const Loader = styled.ActivityIndicator`
	${overlayCss};
`;

export function AuthSignUp({ navigation }) {
	const ThemeContext = useContext(ThemeManagerContext);
	const { setUser } = useContext(UserManagerContext);
	const [errorMessage, setErrorMessage] = useState(null);
	const [loading, setLoading] = useState(false);
	const emailRef = useRef();
	const usernameRef = useRef();
	const passwordRef = useRef();
	useEffect(() => {
		console.log(emailRef.current.getValue());
	}, [emailRef.current]);

	const handleSignUp = useCallback(async () => {
		setLoading(true);

		try {
			UserService.signUp(
				emailRef.current.getValue(),
				usernameRef.current.getValue(),
				passwordRef.current.getValue(),
			);
			setUser(state => state.set('loggedIn', true));
		} catch (error) {
			setErrorMessage(error.response.data.message);
		} finally {
			setLoading(false);
		}
	}, []);

	return (
		<>
			<StatusBar barStyle="dark-content" />
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
