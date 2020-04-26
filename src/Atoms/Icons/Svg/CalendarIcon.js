import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CalendarIcon({size=22}) {
	return (
		<Svg fill="black" viewBox="0 0 511.992 511.992" width={size} height={size}>
			<Path d="M482 292.25V46c0-8.285-6.715-15-15-15h-76V15c0-8.285-6.715-15-15-15s-15 6.715-15 15v16h-60V15c0-8.285-6.715-15-15-15s-15 6.715-15 15v16h-60V15c0-8.285-6.715-15-15-15s-15 6.715-15 15v16h-60V15c0-8.285-6.715-15-15-15S91 6.715 91 15v16H15C6.715 31 0 37.715 0 46v391c0 8.285 6.715 15 15 15h249.805c24.25 36.152 65.488 60 112.195 60 74.438 0 135-60.563 135-135 0-32.07-11.25-61.563-30-84.75zM91 61v15c0 8.285 6.715 15 15 15s15-6.715 15-15V61h60v15c0 8.285 6.715 15 15 15s15-6.715 15-15V61h60v15c0 8.285 6.715 15 15 15s15-6.715 15-15V61h60v15c0 8.285 6.715 15 15 15s15-6.715 15-15V61h61v60H30V61zM30 422V151h422v113.805C430.535 250.41 404.73 242 377 242c-47.398 0-89.164 24.559-113.258 61.613A14.911 14.911 0 00257 302h-30c-8.285 0-15 6.715-15 15s6.715 15 15 15h22.723a133.88 133.88 0 00-6.883 30H227c-8.285 0-15 6.715-15 15s6.715 15 15 15h15.84a133.666 133.666 0 006.883 30zm347 60c-57.898 0-105-47.102-105-105s47.102-105 105-105 105 47.102 105 105-47.102 105-105 105zm0 0" />
			<Path d="M437 362h-45v-45c0-8.285-6.715-15-15-15s-15 6.715-15 15v60c0 8.285 6.715 15 15 15h60c8.285 0 15-6.715 15-15s-6.715-15-15-15zm0 0M136 182h-30c-8.285 0-15 6.715-15 15s6.715 15 15 15h30c8.285 0 15-6.715 15-15s-6.715-15-15-15zm0 0M136 242h-30c-8.285 0-15 6.715-15 15s6.715 15 15 15h30c8.285 0 15-6.715 15-15s-6.715-15-15-15zm0 0M136 302h-30c-8.285 0-15 6.715-15 15s6.715 15 15 15h30c8.285 0 15-6.715 15-15s-6.715-15-15-15zm0 0M227 212h30c8.285 0 15-6.715 15-15s-6.715-15-15-15h-30c-8.285 0-15 6.715-15 15s6.715 15 15 15zm0 0M227 272h30c8.285 0 15-6.715 15-15s-6.715-15-15-15h-30c-8.285 0-15 6.715-15 15s6.715 15 15 15zm0 0M136 362h-30c-8.285 0-15 6.715-15 15s6.715 15 15 15h30c8.285 0 15-6.715 15-15s-6.715-15-15-15zm0 0M347 212h30c8.285 0 15-6.715 15-15s-6.715-15-15-15h-30c-8.285 0-15 6.715-15 15s6.715 15 15 15zm0 0" />
		</Svg>
	)
}

export default CalendarIcon