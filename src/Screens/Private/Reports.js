import React, {useContext} from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { BaseView } from '../../Atoms/Flex';

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
