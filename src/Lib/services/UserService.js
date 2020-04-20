import qs from 'qs';
import Api from '../api';

class UserService {
	constructor(apiService) {
		this.apiService = apiService;
	}

	signIn(username, password) {}

	signUp(email, username, password) {
		return this.apiService
			.post('auth/sign-up', {
				email: email,
				fullName: username,
				password: password,
				clientId: 'application',
			})
			.then(() => {
				this.apiService.post(
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
			});
	}
}

export default new UserService(Api);
