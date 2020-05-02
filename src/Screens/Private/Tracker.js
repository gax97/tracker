import React, { useCallback, useContext, useLayoutEffect, useState, } from 'react';
import { ThemeManagerContext } from '../../Context/ThemeManager';
import { BaseText, TextLarge } from '../../Atoms/Text';
import { MediumDivider } from '../../Atoms/Dividers';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { CenterFlexStretch, FlexRow, PageWrapper } from '../../Atoms/Wrappers';
import { ConfirmButton } from '../../Molecules/Buttons/ConfirmButton';
import TimerService from '../../Lib/services/TimerService';
import { CancelButton } from '../../Molecules/Buttons/CancelButton';
import { OverlayLoader } from '../../Atoms/Loaders';
import { TimerContext } from '../../Context/TimerManager';
import { TimeDisplay } from '../../Molecules/TimeDisplay';

var duration = require('dayjs/plugin/duration');

dayjs.extend(duration);
const TopSectionWrapper = styled.View`
	align-self: flex-start;
	padding-left: 20px;
	padding-right: 20px;
	flex: 1;
	padding-top: 40px;,
`;
const BottomSectionWrapper = styled.View`
	padding-left: 20px;
	padding-right: 20px;
	flex: 1;
	align-self: stretch;
`;

export function Tracker({ navigation }) {
	const ThemeContext = useContext(ThemeManagerContext);
	const { timer, setTimer, loading: loadingTimerData } = useContext(
		TimerContext,
	);
	const [displayTime, setDisplayTime] = useState({
		hour: '00',
		minute: '00',
		second: '00',
	});
	const date = dayjs();
	const startTime = timer.get('startTime');
	const isRunning = timer.get('isRunning');
	useLayoutEffect(() => {
		if (!isRunning) {
			return;
		}

		if (startTime) {
			TimerService.setStartTime(startTime);
		}
		const l = setInterval(() => {
			setDisplayTime(TimerService.getCurrentInterval());
		}, 1000);

		return () => {
			clearInterval(l);
		};
	}, [startTime, isRunning]);

	const handleButtonPress = useCallback(async () => {
		if (!timer.get('isRunning')) {
			const { data } = await TimerService.clockIn();
			setTimer(prevState => {
				return prevState
					.set('isRunning', true)
					.set('timerId', data.time.id)
					.set('label', data.time.label)
					.set('startTime', data.time.startTime);
			});
		} else {
			await TimerService.clockOut(timer.get('timerId'));
			setTimer(prevState => {
				return prevState.set('isRunning', false);
			});
		}
	}, [timer]);

	return (
		<>
			<PageWrapper>
				<TopSectionWrapper>
					<BaseText>Today is</BaseText>
					<FlexRow>
						<TextLarge color="#20c284">{date.format('dddd')}</TextLarge>
						<TextLarge>{date.format(', MMMM DD.')}</TextLarge>
					</FlexRow>
					<MediumDivider />
				</TopSectionWrapper>
				<CenterFlexStretch>
					<TimeDisplay displayTime={displayTime} />
				</CenterFlexStretch>
				<BottomSectionWrapper>
					{!isRunning && (
						<ConfirmButton text="Clock In" onPress={handleButtonPress} />
					)}
					{isRunning && (
						<CancelButton text="Clock Out" onPress={handleButtonPress} />
					)}
				</BottomSectionWrapper>
			</PageWrapper>
			<OverlayLoader loading={loadingTimerData} />
		</>
	);
}
