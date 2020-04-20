import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeManager } from './Context/ThemeManager';
import { MainRouter } from './Screens/MainRouter';
import { UserManager } from './Context/UserManager';

const App = () => {
	return (
		<SafeAreaProvider>
			<ThemeManager>
				<UserManager>
					<MainRouter />
				</UserManager>
			</ThemeManager>
		</SafeAreaProvider>
	);
};

export default App;
