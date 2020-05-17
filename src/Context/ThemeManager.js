import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';
import { Colors } from '../Lib/constants';

export const Themes = {
	light: {
		colorPrimary: Colors.MainLight,
		colorSecondary: 'black',
		buttonPrimary: Colors.MainGreen,
		background: Colors.MainLight,
		text: {
			color: {
				primary: Colors.MainDark,
				secondary: 'gray',
			},
		},
	},
	dark: {
		colorPrimary: Colors.MainDark,
		colorSecondary: 'white',
		buttonPrimary: Colors.MainGreen,
		background: Colors.MainDark,
		text: {
			color: {
				primary: Colors.MainLight,
				secondary: 'blue',
			},
		},
	},
};
export const ThemeManagerContext = React.createContext({});

export const ThemeManager = ({ children }) => {
	const colorSchemeName = useColorScheme();
	const [theme, setTheme] = useState(Themes.dark);

	// useEffect(() => {
	// 	if (colorSchemeName === 'dark') {
	// 		setTheme(Themes.dark);
	// 	} else {
	// 		setTheme(Themes.light);
	// 	}
	// }, [colorSchemeName]);

	const toggleTheme = () => {
		if (theme === Themes.light) {
			setTheme(Themes.dark);
		} else {
			setTheme(Themes.light);
		}
	};

	return (
		<ThemeManagerContext.Provider value={{ theme, toggleTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeManagerContext.Provider>
	);
};
ThemeManager.propTypes = {
	children: PropTypes.node.isRequired,
};
