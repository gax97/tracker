import React, { useContext, useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { FlexColumn } from '../../Atoms/Flex';
import { FlexRow, PageWrapper } from '../../Atoms/Wrappers';
import UserService from '../../Lib/services/UserService';
import { Loader } from '../../Atoms/Loaders';
import { BaseText, TextLarge } from '../../Atoms/Text';
import dayjs from 'dayjs';
import { formatTime } from '../../Lib/helpers';
import { TimerContext } from '../../Context/TimerManager';
import { Colors } from "../../Lib/constants";

export function Reports() {
	const { timer } = useContext(TimerContext);
	const [loading, setLoading] = useState(false);
	const [reports, setReports] = useState([]);
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
			<ScrollView style={{ width: '100%' }}>
				<FlexColumn>
					{reports.map(report => {
						const startTime = dayjs(report.startTime);
						const endTime = dayjs(report.endTime);
						const startTimeFormatted = startTime.format('MMMM DD');
						const duration = dayjs.duration(endTime.diff(startTime));
						const formattedDifference = formatTime(duration.asSeconds(), true);

						return (
							<FlexRow
								justifyContent="space-around"
								style={{
									alignSelf: 'stretch',
									padding: 3,
									borderWidth: 3,
									borderColor: 'gray',
								}}>
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
