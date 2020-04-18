import React from 'react';
import 'react-native-gesture-handler';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';
import { ThemeManager } from './Context/ThemeManager';
import { BaseView } from './Atoms/Flex';
import { BaseButton } from './Atoms/Button';
import { Tracker } from './Screens/Tracker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Reports } from './Screens/Reports';
import { Dashboard } from './Screens/Dashboard';
import { AuthLogin } from './Screens/AuthLogin';
import { AuthSignUp } from './Screens/AuthSignUp';
import { Screens } from './Lib/screens';
import { BaseText } from './Atoms/Text';

const Stack = createStackNavigator();

const Header = ({leftButton}) => {
	return (
		<View style={{height: 10, flex: 1}}>{leftButton}</View>
	);
};

const BackButton = ({onPress}) => {
	return (
		<BaseButton onPress={onPress} style={{flex: 1}}>
			<BaseText>Back</BaseText>
		</BaseButton>
	);
};

const getCustomHeader = ({scene, previous, navigation}) => {
	const {options} = scene.descriptor;
	const title =
		options.headerTitle !== undefined
			? options.headerTitle
			: options.title !== undefined
			? options.title
			: scene.route.name;

	return (
		<Header
			title={title}
			leftButton={
				previous ? <BackButton onPress={navigation.goBack} /> : undefined
			}
			style={options.headerStyle}
		/>
	);
};

const App = () => {
	return (
		<ThemeManager>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name={Screens.Tracker}
						component={Tracker}
						options={{
							header: getCustomHeader,
						}}
					/>
					<Stack.Screen
						name={Screens.Reports}
						component={Reports}
						options={{
							header: getCustomHeader,
						}}
					/>
					<Stack.Screen
						name={Screens.Dashboard}
						component={Dashboard}
						options={{
							header: getCustomHeader,
						}}
					/>
					<Stack.Screen
						name={Screens.Login}
						component={AuthLogin}
						options={{
							header: getCustomHeader,
						}}
					/>
					<Stack.Screen name={Screens.SignUp} component={AuthSignUp} />
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeManager>
	);
};

export default App;
