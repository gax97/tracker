import React, { useContext } from 'react';
import { Alert, SafeAreaView, StatusBar, Text } from 'react-native';
import { BaseView } from '../Atoms/Flex';
import { BaseButton } from '../Atoms/Button';
import {
	ThemeManager,
	ThemeManagerContext,
	Themes,
} from '../Context/ThemeManager';
import { BaseText } from '../Atoms/Text';
import { Screens } from '../Lib/screens';

export function Dashboard({ route, navigation }) {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<BaseView>
					<Text>Dashboard</Text>
					<BaseButton onPress={() => navigation.navigate(Screens.Login)}>
						<BaseText>Go to Login</BaseText>
					</BaseButton>
				</BaseView>
			</SafeAreaView>
		</>
	);
}
