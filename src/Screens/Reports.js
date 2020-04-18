import React, {useContext} from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { BaseView } from '../Atoms/Flex';
import { BaseButton } from '../Atoms/Button';
import { ThemeManager, ThemeManagerContext, Themes } from '../Context/ThemeManager';
import { BaseText } from "../Atoms/Text";

export function Reports() {

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<BaseView>
					<Text>Reports</Text>
				</BaseView>
			</SafeAreaView>
		</>
	);
}
