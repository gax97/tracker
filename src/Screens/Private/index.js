import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from '../../Lib/screens';
import { Tracker } from '../Tracker';
import { Reports } from '../Reports';
import { Dashboard } from '../Dashboard';

const BottomTab = createBottomTabNavigator();

export const Private = () => {
	return (
		<BottomTab.Navigator>
			<BottomTab.Screen name={Screens.Tracker} component={Tracker} />
			<BottomTab.Screen name={Screens.Reports} component={Reports} />
			<BottomTab.Screen name={Screens.Dashboard} component={Dashboard} />
		</BottomTab.Navigator>
	);
};
