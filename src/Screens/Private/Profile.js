import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { BaseView } from '../../Atoms/Flex';
import { BaseText } from '../../Atoms/Text';
import { GreenLink } from '../../Atoms/Links';
import { UserManagerContext } from '../../Context/UserManager';

export function Profile({ route, navigation }) {
	const { logout } = useContext(UserManagerContext);

	return (
		<>
			<SafeAreaView>
				<BaseView>
					<BaseText>Profile</BaseText>
					<BaseText>Soon....</BaseText>
					<GreenLink text="Logout" onPress={() => logout()} />
				</BaseView>
			</SafeAreaView>
		</>
	);
}
