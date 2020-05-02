import qs from 'qs';
import Api from '../api';
import dayjs from 'dayjs';
import { formatTime } from '../helpers';

class TimerService {
	constructor(apiService) {
		this.apiService = apiService;
	}

	clockIn(label = 'Unlabled') {
		return this.apiService.post(
			'time/clock-in' + '/' + label,
			{},
			{
				Authorization: `Bearer ${this.apiService.token}`,
			},
		);
	}

	clockOut(timerId) {
		return this.apiService.post(
			'time/clock-out' + '/' + timerId,
			{},
			{
				Authorization: `Bearer ${this.apiService.token}`,
			},
		);
	}

	setStartTime(startTime) {
		this.startTime = dayjs(startTime);
	}

	getCurrentInterval() {
		const now = dayjs();
		const duration = dayjs.duration(now.diff(this.startTime));
		const res = formatTime(duration.asSeconds());

		return res;
	}
}

export default new TimerService(Api);
