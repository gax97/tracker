import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Private } from './Private';
import { Public } from './Public';
import { UserManagerContext } from '../Context/UserManager';

export const MainRouter = () => {
	const { user } = React.useContext(UserManagerContext);

	return (
		<NavigationContainer>
			{user.get('loggedIn') ? <Private /> : <Public />}
		</NavigationContainer>
	);
};
