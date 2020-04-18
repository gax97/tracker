import React, {useContext} from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { BaseView } from '../Atoms/Flex';
import { BaseButton } from '../Atoms/Button';
import {
	ThemeManager,
	ThemeManagerContext,
	Themes,
} from '../Context/ThemeManager';
import { BaseText } from '../Atoms/Text';
import { Screens } from '../Lib/screens';
import { BaseDivider } from '../Atoms/Dividers';

export function Tracker({ navigation }) {
	const ThemeContext = useContext(ThemeManagerContext);

	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="red"/>
			<SafeAreaView style={{backgroundColor: 'red' }}>
				<BaseView>
					<Text>Start</Text>
					<BaseButton
						onPress={() =>
							navigation.navigate(Screens.Dashboard, { prop1: 1, prop2: 2 })
						}
					>
						<BaseText>Go to somewhere</BaseText>
					</BaseButton>
					<BaseDivider />
					<BaseButton onPress={ThemeContext.toggleTheme}>
						<BaseText>Change theme</BaseText>
					</BaseButton>
				</BaseView>
			</SafeAreaView>
		</>
	);
}
