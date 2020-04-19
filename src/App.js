import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeManager } from './Context/ThemeManager';
import { MainRouter } from './Screens/MainRouter';

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
