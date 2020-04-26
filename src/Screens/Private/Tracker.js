import React, {
	useCallback,
	useContext,
	useEffect,
	useLayoutEffect,
	useState,
} from 'react';
import { Dimensions } from 'react-native';
import { FlexRowAlignCenter } from '../../Atoms/Flex';
import { ThemeManagerContext } from '../../Context/ThemeManager';
import { BaseText, TextLarge } from '../../Atoms/Text';
import { MediumDivider } from '../../Atoms/Dividers';
import { UserManagerContext } from '../../Context/UserManager';
import dayjs from 'dayjs';
import styled from 'styled-components';
import {
	CenterFlexStretch,
	flexRow,
	FlexRow,
	Overlay,
} from '../../Atoms/Wrappers';
import { GreenLink } from '../../Atoms/Links';
import { ConfirmButton } from '../../Molecules/Buttons/ConfirmButton';
import TimerService from '../../Lib/services/TimerService';
import { CancelButton } from '../../Molecules/Buttons/CancelButton';
import { formatTime } from '../../Lib/helpers';
import { Loader, OverlayLoader } from '../../Atoms/Loaders';
import ClockIcon from '../../Atoms/Icons/Svg/Clock';
import { TimerContext, TimerManager } from '../../Context/TimerManager';

var duration = require('dayjs/plugin/duration');

dayjs.extend(duration);
const PageWrapper = styled.SafeAreaView`
	background-color: ${props => props.theme.colorPrimary};
	flex: 1;
	align-items: center;
`;
const FontSize = (Dimensions.get('window').width - 200) / 3;
const TimeNumbersWrapper = styled.View`
	${flexRow};
	min-width: ${FontSize + 20};
`;
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

function TimeDisplay(props: {
	displayTime: { hour: string, minute: string, second: string },
}) {
	return (
		<FlexRowAlignCenter>
			<TimeNumbersWrapper>
				<BaseText style={{ fontSize: FontSize }}>
					{props.displayTime.hour}
				</BaseText>
				<BaseText style={{ fontSize: FontSize }}>:</BaseText>
			</TimeNumbersWrapper>
			<TimeNumbersWrapper>
				<BaseText style={{ fontSize: FontSize }}>
					{props.displayTime.minute}
				</BaseText>
				<BaseText style={{ fontSize: FontSize }}>:</BaseText>
			</TimeNumbersWrapper>
			<TimeNumbersWrapper>
				<BaseText style={{ fontSize: FontSize }}>
					{props.displayTime.second}
				</BaseText>
			</TimeNumbersWrapper>
		</FlexRowAlignCenter>
	);
}

export function Tracker({ navigation }) {
	const ThemeContext = useContext(ThemeManagerContext);
	const { timer, setTimer, loading: loadingTimerData } = useContext(
		TimerContext,
	);
	const date = dayjs();
	const [displayTime, setDisplayTime] = useState({
		hour: '00',
		minute: '00',
		second: '00',
	});
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
			console.log(data);
			setTimer(prevState => {
				return prevState
					.set('isRunning', true)
					.set('timerId', data.time.id)
					.set('label', data.time.label)
					.set('startTime', data.time.startTime);
			});
		} else {
			console.log(timer.get('timerId'));
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
