import qs from 'qs';
import Api from '../api';

class UserService {
	constructor(apiService) {
		this.apiService = apiService;
	}

	signIn(email, password) {
		return this.apiService.post(
			'auth/sign-in',
			qs.stringify({
				username: email,
				password: password,
				grant_type: 'password',
			}),
			{
				Authorization: 'Basic YXBwbGljYXRpb246c2VjcmV0',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		);
	}

	async signUp(email, username, password) {
		try {
			await this.apiService.post('auth/sign-up', {
				email: email,
				fullName: username,
				password: password,
				clientId: 'application',
			});

			return this.signIn(email, password);
		} catch (e) {
			throw e;
		}
	}

	getReports() {
		return this.apiService.get('time/', {
			Authorization: `Bearer ${this.apiService.token}`,
		});
	}
}

export default new UserService(Api);
