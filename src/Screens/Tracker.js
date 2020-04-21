import React, { useContext } from 'react';
import { Alert, SafeAreaView, StatusBar, Text } from 'react-native';
import { BaseView } from '../Atoms/Flex';
import { BaseButton } from '../Atoms/Button';
import { ThemeManagerContext } from '../Context/ThemeManager';
import { BaseText } from '../Atoms/Text';
import { Screens } from '../Lib/screens';
import { BaseDivider } from '../Atoms/Dividers';
import { UserManagerContext } from '../Context/UserManager';

export function Tracker({ navigation }) {
	const ThemeContext = useContext(ThemeManagerContext);
	const { logout } = useContext(UserManagerContext);

	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="red" />
			<SafeAreaView>
				<BaseView>
					<Text>Start</Text>
					<BaseButton
						onPress={() =>
							navigation.navigate(Screens.Dashboard, { prop1: 1, prop2: 2 })
						}>
						<BaseText>Go to somewhere</BaseText>
					</BaseButton>
					<BaseDivider />
					<BaseButton onPress={logout}>
						<BaseText>Log out</BaseText>
					</BaseButton>
				</BaseView>
			</SafeAreaView>
		</>
	);
}
