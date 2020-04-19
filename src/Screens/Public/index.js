import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthLogin } from './AuthLogin';
import { Screens } from '../../Lib/screens';
import { AuthSignUp } from './AuthSignUp';

const Stack = createStackNavigator();

export const Public = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen component={AuthLogin} name={Screens.Login} />
			<Stack.Screen component={AuthSignUp} name={Screens.SignUp} />
		</Stack.Navigator>
	);
};
