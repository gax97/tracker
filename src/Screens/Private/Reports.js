import React, { useContext, useEffect, useState } from 'react';
import {
	Alert,
	Platform,
	ScrollView,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { FlexColumn } from '../../Atoms/Flex';
import { FlexRow, OpacityWrapper, PageWrapper } from '../../Atoms/Wrappers';
import UserService from '../../Lib/services/UserService';
import { Loader } from '../../Atoms/Loaders';
import { BaseText, TextLarge } from '../../Atoms/Text';
import dayjs from 'dayjs';
import { formatTime } from '../../Lib/helpers';
import { TimerContext } from '../../Context/TimerManager';
import { Colors } from '../../Lib/constants';
import { SmallDivider } from '../../Atoms/Dividers';
import RNPickerSelect from 'react-native-picker-select';

const items = [
	{ label: 'Latest', value: 'latest' },
	{ label: 'Oldest', value: 'oldest' },
];

export function Reports() {
	const { timer } = useContext(TimerContext);
	const [loading, setLoading] = useState(false);
	const [reports, setReports] = useState([]);
	const [sort, setSort] = useState(items[0].value);
	const [tipVisible, setTipVisible] = useState(false);
	useEffect(() => {
		let interval = setInterval(() => {
			setTipVisible(p => !p);
		}, 30000);

		return () => clearInterval(interval);
	}, []);
	useEffect(() => {
		setReports(prevState => prevState.slice().reverse());
	}, [sort]);
	useEffect(() => {
		if (timer.get('isRunning')) {
			return;
		}
		setLoading(true);
		UserService.getReports()
			.then(response => {
				if (sort === 'latest') {
					setReports(response.data);
				} else if (sort === 'oldest') {
					setReports(response.data.slice().reverse());
				}
			})
			.catch(e => {
				Alert(e);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [timer.get('isRunning')]);

	return (
		<PageWrapper>
			<TextLarge>Reports</TextLarge>
			<SmallDivider />
			<FlexRow style={styles.header}>
				<BaseText>Sort by</BaseText>
				<RNPickerSelect
					useNativeAndroidPickerStyle={false}
					onValueChange={setSort}
					placeholder={Platform.OS === 'ios' ? items[0] : {}}
					items={items}
					style={{
						...pickerSelectStyles,
						iconContainer: {
							top: 10,
							right: 12,
						},
					}}
				/>
			</FlexRow>
			<SmallDivider />
			<ScrollView style={styles.scrollView}>
				<FlexColumn>
					{reports.map((report, index, array) => {
						const startTime = dayjs(report.startTime);
						const endTime = dayjs(report.endTime);
						const startTimeFormatted = startTime.format('MMMM DD');
						const duration = dayjs.duration(endTime.diff(startTime));
						const formattedDifference = formatTime(duration.asSeconds(), true);

						return (
							<>
								<TouchableWithoutFeedback
									key={report.id}
									onLongPress={() =>
										Alert.alert(
											'Report from: ' + startTime.format('MMMM DD. YYYY.'),
											'Started at: ' +
												startTime.format('HH:MM:ss') +
												'\n' +
												'Finished at: ' +
												endTime.format('HH:MM:ss') +
												'\n' +
												'Label: ' +
												report.label,
										)
									}>
									<FlexRow style={styles.rowWrapper}>
										<BaseText>{startTimeFormatted}</BaseText>
										<BaseText>{formattedDifference}</BaseText>
									</FlexRow>
								</TouchableWithoutFeedback>
								{index + 1 < array.length - 1 &&
									startTimeFormatted !==
										dayjs(array[index + 1].startTime).format('MMMM DD') && (
										<SmallDivider />
									)}
							</>
						);
					})}
				</FlexColumn>
			</ScrollView>
			<OpacityWrapper visible={tipVisible}>
				<BaseText style={styles.bottomTip}>
					Tip: Long press on the row to see more details
				</BaseText>
			</OpacityWrapper>
			{loading && <Loader />}
		</PageWrapper>
	);
}
const styles = StyleSheet.create({
	bottomTip: {
		textAlign: 'left',
		alignSelf: 'flex-start',
		padding: 20,
	},
	scrollView: {
		width: '100%',
	},
	rowWrapper: {
		alignSelf: 'stretch',
		paddingHorizontal: 15,
		borderBottomWidth: 2,
		borderColor: 'gray',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 35,
	},
	header: {
		width: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 200,
	},
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingVertical: 6,
		paddingHorizontal: 5,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		color: Colors.MainGreen,
	},
	inputAndroid: {
		fontSize: 16,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 2,
		borderColor: 'gray',
		borderRadius: 8,
		color: 'white',
		paddingRight: 30, // to ensure the text is never behind the icon
	},
});
