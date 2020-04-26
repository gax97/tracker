import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Private } from './Private';
import { Public } from './Public';
import { UserManagerContext } from '../Context/UserManager';
import { StatusBar } from 'react-native';

export const MainRouter = () => {
	const { user } = React.useContext(UserManagerContext);

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<NavigationContainer>
				{user.get('loggedIn') ? <Private /> : <Public />}
			</NavigationContainer>
		</>
	);
};
