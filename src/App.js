import React from 'react';
import 'react-native-gesture-handler';
import styled, { useTheme } from 'styled-components';
import { SafeAreaProvider, useSafeArea } from 'react-native-safe-area-context';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Alert,
	TouchableOpacity,
} from 'react-native';
import { ThemeManager } from './Context/ThemeManager';
import { BaseButton } from './Atoms/Button';
import { Tracker } from './Screens/Tracker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Reports } from './Screens/Reports';
import { Dashboard } from './Screens/Dashboard';
import { AuthLogin } from './Screens/AuthLogin';
import { AuthSignUp } from './Screens/AuthSignUp';
import { Screens } from './Lib/screens';
import { BaseText } from './Atoms/Text';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const Header = ({ leftButton }) => {
	const insets = useSafeArea();
	const theme = useTheme();

	return (
		<View
			style={{
				paddingTop: insets.top,
				backgroundColor: theme.colorPrimary,
			}}>
			<View style={{ height: 30 }}>{leftButton}</View>
		</View>
	);
};

const BackButton = ({ onPress }) => {
	return (
		<BackButton.Wrapper onPress={onPress}>
			<BackButton.Text>Back</BackButton.Text>
		</BackButton.Wrapper>
	);
};
BackButton.Wrapper = styled.TouchableOpacity`
	height: 50px;
	flex: 1;
`;
BackButton.Text = styled.Text`
	color: ${props => props.theme.text.color.primary};
	font-size: 28px;
`;

const getCustomHeader = ({ scene, previous, navigation }) => {
	const { options } = scene.descriptor;
	const title =
		options.headerTitle !== undefined
			? options.headerTitle
			: options.title !== undefined
			? options.title
			: scene.route.name;

	return (
		<Header
			leftButton={previous && <BackButton onPress={navigation.goBack} />}
			style={options.headerStyle}
			title={title}
		/>
	);
};

const Private = () => {
	return (
		<BottomTab.Navigator>
			<BottomTab.Screen name={Screens.Tracker} component={Tracker} />
			<BottomTab.Screen name={Screens.Reports} component={Reports} />
			<BottomTab.Screen name={Screens.Dashboard} component={Dashboard} />
		</BottomTab.Navigator>
	);
};

const Public = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen component={AuthLogin} name={Screens.Login} />
			<Stack.Screen component={AuthSignUp} name={Screens.SignUp} />
		</Stack.Navigator>
	);
};

const MainRouter = () => {
	const isLoggedIn = false;

	return (
		<NavigationContainer>
			{isLoggedIn ? <Private /> : <Public />}
		</NavigationContainer>
	);
};

const App = () => {
	return (
		<SafeAreaProvider>
			<ThemeManager>
				<MainRouter />
			</ThemeManager>
		</SafeAreaProvider>
	);
};

export default App;
