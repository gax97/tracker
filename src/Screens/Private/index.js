import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from '../../Lib/screens';
import { Tracker } from './Tracker';
import { Reports } from './Reports';
import { Profile } from './Profile';
import ClockIcon from '../../Atoms/Icons/Svg/Clock';
import { Colors } from '../../Lib/constants';
import CalendarIcon from '../../Atoms/Icons/Svg/CalendarIcon';
import ProfileIcon from '../../Atoms/Icons/Svg/ProfileIcon';
import { TimerManager } from '../../Context/TimerManager';

const BottomTab = createBottomTabNavigator();

export const Private = () => {
	return (
		<TimerManager>
			<BottomTab.Navigator
				tabBarOptions={{ activeTintColor: Colors.MainGreen }}
			>
				<BottomTab.Screen
					name={Screens.Tracker}
					component={Tracker}
					options={{
						tabBarIcon: ({ color, size }) => {
							return <ClockIcon size={size} />;
						},
					}}
				/>
				<BottomTab.Screen
					name={Screens.Reports}
					component={Reports}
					options={{
						tabBarIcon: ({ color, size }) => {
							return <CalendarIcon size={size} />;
						},
					}}
				/>
				<BottomTab.Screen
					name={Screens.Profile}
					component={Profile}
					options={{
						tabBarIcon: ({ color, size }) => {
							return <ProfileIcon size={size} />;
						},
					}}
				/>
			</BottomTab.Navigator>
		</TimerManager>
	);
};
