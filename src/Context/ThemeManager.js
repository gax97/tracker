import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import { useColorScheme } from 'react-native';

export const Themes = {
	light: {
		colorPrimary: '#ffffff',
		buttonPrimary: 'orange',
		background: '#ffffff',
	},
	dark: {
		colorPrimary: '#000000',
		buttonPrimary: 'red',
		background: '#000000',
	},
};
export const ThemeManagerContext = React.createContext({});

export const ThemeManager = ({ children }) => {
	const colorSchemeName = useColorScheme();
	const [theme, setTheme] = useState(Themes.light);

	const toggleTheme = () => {
		if (theme === Themes.light) {
			setTheme(Themes.dark);
		} else {
			setTheme(Themes.light);
		}
	};
	useEffect(() => {
		if (colorSchemeName === 'dark') {
			setTheme(Themes.dark);
		} else {
			setTheme(Themes.light);
		}
	}, [colorSchemeName]);

	return (
		<ThemeManagerContext.Provider value={{ theme, toggleTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeManagerContext.Provider>
	);
};
ThemeManager.propTypes = {
	children: PropTypes.node.isRequired,
};
