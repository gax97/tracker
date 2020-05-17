import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Private } from './Private';
import { Public } from './Public';
import { UserManagerContext } from '../Context/UserManager';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export const MainRouter = () => {
	const { user } = React.useContext(UserManagerContext);

	useEffect(() => {
		setTimeout(()=>{


		}, 3000)
	}, []);

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<NavigationContainer>
				{user.get('loggedIn') ? <Private /> : <Public />}
			</NavigationContainer>
		</>
	);
};
