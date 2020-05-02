import axios from 'axios';

const config = {
	API_CONFIG: {
		baseURL: 'http://192.168.1.2:3000/',
		timeout: 200000,
		responseType: 'json',
		responseEncoding: 'utf8',
		// headers: { 'Content-Type': 'application/json' },
		// 'content-type': 'application/x-www-form-urlencoded',
	},
};
class Api {
	constructor(config) {
		this.api = axios.create(config);
		this.token = null;
	}

	get(path, headers) {
		return this.api.get(path, { headers: { ...headers } });
	}

	post(path, body, headers) {
		return this.api.post(path, body, { headers: { ...headers } });
	}

	setToken(token) {
		this.token = token;
	}
}

export default new Api(config.API_CONFIG);
