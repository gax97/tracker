import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Private } from './Private';
import { Public } from './Public';

export const MainRouter = () => {
	const isLoggedIn = false;

	return (
		<NavigationContainer>
			{isLoggedIn ? <Private /> : <Public />}
		</NavigationContainer>
	);
};
