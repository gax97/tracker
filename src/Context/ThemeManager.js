import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

export const Themes = {
	light: {
		colorPrimary: '#ffffff',
		colorSecondary: 'black',
		buttonPrimary: 'orange',
		background: '#ffffff',
		text: {
			color: {
				primary: '#1F2630',
				secondary: 'gray',
			},
		},
	},
	dark: {
		colorPrimary: '#1F2630',
		colorSecondary: 'white',
		buttonPrimary: 'red',
		background: '#1F2630',
		text: {
			color: {
				primary: '#ffffff',
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
