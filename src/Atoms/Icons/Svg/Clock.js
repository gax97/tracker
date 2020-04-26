import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components';

function ClockIcon({ size = 24 }) {
	const theme = useTheme();

	return (
		<Svg fill="black" viewBox="0 0 511.992 511.992" width={size} height={size}>
			<Path d="M511.005 279.646c-4.597-46.238-25.254-89.829-58.168-122.744-28.128-28.127-62.556-46.202-98.782-54.239V77.255c14.796-3.681 25.794-17.074 25.794-32.993 0-18.748-15.252-34-34-34h-72c-18.748 0-34 15.252-34 34 0 15.918 10.998 29.311 25.793 32.993v25.479c-36.115 8.071-70.429 26.121-98.477 54.169a202.966 202.966 0 00-16.979 19.269 9.99 9.99 0 00-.758-.038H78.167c-5.522 0-10 4.477-10 10s4.478 10 10 10h58.412a200.467 200.467 0 00-17.744 38.436H10c-5.522 0-10 4.477-10 10s4.478 10 10 10h103.184a203.324 203.324 0 00-4.963 38.437H64c-5.522 0-10 4.477-10 10s4.478 10 10 10h44.54a203.025 203.025 0 006.244 38.437H50c-5.522 0-10 4.477-10 10s4.478 10 10 10h71.166c9.81 25.951 25.141 50.274 45.999 71.132 32.946 32.946 76.582 53.608 122.868 58.181 6.606.652 13.217.975 19.819.975 39.022 0 77.548-11.293 110.238-32.581 4.628-3.014 5.937-9.209 2.923-13.837s-9.209-5.937-13.837-2.923c-71.557 46.597-167.39 36.522-227.869-23.957-70.962-70.962-70.962-186.425 0-257.388 70.961-70.961 186.424-70.961 257.387 0 60.399 60.4 70.529 156.151 24.086 227.673-3.008 4.632-1.691 10.826 2.94 13.833 4.634 3.008 10.826 1.691 13.833-2.941 24.814-38.215 35.984-84.37 31.452-129.965zM259.849 44.263c0-7.72 6.28-14 14-14h72c7.72 0 14 6.28 14 14s-6.28 14-14 14h-72c-7.72 0-14-6.281-14-14zm25.793 55.033V78.263h48.413V99.26a203.755 203.755 0 00-48.413.036z" />
			<Path d="M445.77 425.5c-2.64 0-5.21 1.07-7.069 2.93a10.034 10.034 0 00-2.931 7.07c0 2.63 1.061 5.21 2.931 7.07a10.013 10.013 0 007.069 2.93c2.63 0 5.2-1.06 7.07-2.93 1.86-1.86 2.93-4.44 2.93-7.07s-1.069-5.21-2.93-7.07a10.095 10.095 0 00-7.07-2.93zM310.001 144.609c-85.538 0-155.129 69.59-155.129 155.129s69.591 155.129 155.129 155.129 155.129-69.59 155.129-155.129-69.591-155.129-155.129-155.129zm0 290.258c-74.511 0-135.129-60.619-135.129-135.129s60.618-135.129 135.129-135.129S445.13 225.228 445.13 299.738s-60.618 135.129-135.129 135.129z" />
			<Path d="M373.257 222.34l-49.53 49.529a30.885 30.885 0 00-13.726-3.205 30.882 30.882 0 00-13.726 3.205l-22.167-22.167c-3.906-3.905-10.236-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.142l22.167 22.167a30.871 30.871 0 00-3.205 13.726c0 17.134 13.939 31.074 31.074 31.074s31.074-13.94 31.074-31.074c0-4.925-1.157-9.584-3.205-13.726l48.076-48.076 1.453-1.453c3.905-3.905 3.905-10.237 0-14.142s-10.235-3.905-14.142 0zm-63.256 88.472c-6.106 0-11.074-4.968-11.074-11.074s4.968-11.074 11.074-11.074 11.074 4.968 11.074 11.074-4.968 11.074-11.074 11.074zM416.92 289.86h-9.265c-5.522 0-10 4.477-10 10s4.478 10 10 10h9.265c5.522 0 10-4.477 10-10s-4.478-10-10-10zM212.346 289.616h-9.264c-5.522 0-10 4.477-10 10s4.478 10 10 10h9.264c5.522 0 10-4.477 10-10s-4.478-10-10-10zM310.123 212.083c5.522 0 10-4.477 10-10v-9.264c0-5.523-4.478-10-10-10s-10 4.477-10 10v9.264c0 5.523 4.478 10 10 10zM309.879 387.393c-5.522 0-10 4.477-10 10v9.264c0 5.523 4.478 10 10 10s10-4.477 10-10v-9.264c0-5.523-4.478-10-10-10zM10 351.44c-2.63 0-5.21 1.07-7.07 2.93A10.076 10.076 0 000 361.44c0 2.64 1.069 5.21 2.93 7.07s4.44 2.93 7.07 2.93 5.21-1.07 7.069-2.93c1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07A10.072 10.072 0 0010 351.44z" />
		</Svg>
	);
}

export default ClockIcon;
