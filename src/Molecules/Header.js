import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';
import { View } from 'react-native';
import { BackButton } from './BackButton';

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
