export function formatTime(time, formated = false) {
	let seconds = Math.floor(time),
		hours = Math.floor(seconds / 3600);

	seconds -= hours * 3600;
	let minutes = Math.floor(seconds / 60);

	seconds -= minutes * 60;

	if (hours < 10) {
		hours = '0' + hours;
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	if (formated) {
		return hours + ':' + minutes + ':' + seconds;
	}

	return { hour: hours, minute: minutes, second: seconds };
}
