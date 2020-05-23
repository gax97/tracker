import React, { useContext } from 'react';
import { GreenLink } from '../../Atoms/Links';
import { UserManagerContext } from '../../Context/UserManager';
import { CenterFlexStretch, PageWrapper } from '../../Atoms/Wrappers';
import { ThemeManagerContext, Themes } from '../../Context/ThemeManager';
import { BaseText, TextLarge } from '../../Atoms/Text';
import { Colors } from '../../Lib/constants';
import { SmallDivider } from '../../Atoms/Dividers';
import {
	Text,
	StyleSheet,
	Switch,
	TouchableWithoutFeedback,
	TouchableHighlight,
} from 'react-native';
import styled from 'styled-components';
import { FlexColumn } from '../../Atoms/Flex';

export function Profile() {
	const { logout } = useContext(UserManagerContext);
	const ThemeContext = useContext(ThemeManagerContext);
	const isDarkTheme = ThemeContext.theme === Themes.dark;
	return (
		<PageWrapper>
			<TextLarge color={Colors.MainGreen}>Profile</TextLarge>
			<SmallDivider />
			<SettingsWrapper>
				<SectionHeading>Appearance</SectionHeading>
				<Row>
					<BaseText>Black theme</BaseText>
					<Switch
						trackColor={{ false: 'gray', true: Colors.MainGreen }}
						ios_backgroundColor="#3e3e3e"
						onValueChange={ThemeContext.toggleTheme}
						value={isDarkTheme}
					/>
				</Row>
				<SmallDivider />
				<SectionHeading>Account</SectionHeading>
				<Row>
					<BaseText>Change password</BaseText>
				</Row>
				<Row as={TouchableHighlight} onPress={logout}>
					<BaseText>Sign out</BaseText>
				</Row>
			</SettingsWrapper>
		</PageWrapper>
	);
}
const Row = styled.View`
	background-color: ${props => props.theme.secondaryBackground};
	height: 51px;
	padding: 15px;
	font-size: 16px;
	border-width: 1px;
	border-color: #3d3838;
	align-self: stretch;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const SettingsWrapper = styled.View`
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
`;
const SectionHeading = styled(BaseText)`
	padding-left: 10px;
	padding-right: 10px;
	padding-bottom: 4px;
	font-size: 18px;
	align-self: flex-start;
`;
