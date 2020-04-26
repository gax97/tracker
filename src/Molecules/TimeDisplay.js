import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import { flexRow } from '../Atoms/Wrappers';
import { FlexRowAlignCenter } from '../Atoms/Flex';
import { BaseText } from '../Atoms/Text';

const FontSize = (Dimensions.get('window').width - 200) / 3;
const TimeNumbersWrapper = styled.View`
	${flexRow};
	min-width: ${FontSize + 20};
`;

export function TimeDisplay(props: {
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
