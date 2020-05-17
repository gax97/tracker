import React, { useContext, useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { FlexColumn } from '../../Atoms/Flex';
import { FlexRow, PageWrapper } from '../../Atoms/Wrappers';
import UserService from '../../Lib/services/UserService';
import { Loader } from '../../Atoms/Loaders';
import { BaseText, TextLarge } from '../../Atoms/Text';
import dayjs from 'dayjs';
import { formatTime } from '../../Lib/helpers';
import { TimerContext } from '../../Context/TimerManager';
import { Colors } from '../../Lib/constants';
import { BigDivider } from '../../Atoms/Dividers';

export function Reports() {
	const { timer } = useContext(TimerContext);
	const [loading, setLoading] = useState(false);
	const [reports, setReports] = useState([]);
	const [state, setState] = useState({ language: 'java' });
	useEffect(() => {
		setLoading(true);
		UserService.getReports()
			.then(response => {
				console.log('all good', response);
				setReports(response.data);
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
			<BigDivider />
			<FlexRow>
				<BaseText>Sort by</BaseText>
			</FlexRow>
			<ScrollView style={{ width: '100%' }}>
				<FlexColumn>
					{reports.map(report => {
						const startTime = dayjs(report.startTime);
						const endTime = dayjs(report.endTime);
						const startTimeFormatted = startTime.format('MMMM DD');
						const duration = dayjs.duration(endTime.diff(startTime));
						const formattedDifference = formatTime(duration.asSeconds(), true);

						return (
							<FlexRow style={styles.rowWrapper}>
								<BaseText>{startTimeFormatted}</BaseText>
								<BaseText>{formattedDifference}</BaseText>
							</FlexRow>
						);
					})}
				</FlexColumn>
			</ScrollView>
			{loading && <Loader />}
		</PageWrapper>
	);
}
const styles = StyleSheet.create({
	rowWrapper: {
		alignSelf: 'stretch',
		paddingHorizontal: 15,
		borderWidth: 3,
		borderColor: 'gray',
		justifyContent: 'space-between',
	},
});
