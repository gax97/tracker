import React, { useContext, useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
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

export function AuthLogin({ navigation }) {
	const ThemeContext = useContext(ThemeManagerContext);
	const emailRef = useRef();
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
						<Input placeholder="email" ref={emailRef} />
						<SmallDivider />
						<Input secure placeholder="password" type="password" />
						<MediumDivider />
						<ConfirmButton text="Sign In" />
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
		</>
	);
}
