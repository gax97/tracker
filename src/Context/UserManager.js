import React, { useCallback } from 'react';
import { Map } from 'immutable';

export const UserManagerContext = React.createContext({});
const initialState = Map({
	username: undefined,
	email: undefined,
	accessToken: undefined,
	refreshToken: undefined,
	loggedIn: false,
});

export const UserManager = ({ children }) => {
	const [user, setUser] = React.useState(initialState);

	const logout = useCallback(() => {
		setUser(initialState);
	}, []);

	const login = useCallback((username, email, accessToken, refreshToken) => {
		setUser(prevState =>
			prevState
				.set('loggedIn', true)
				.set('username', username)
				.set('email', email)
				.set('accessToken', accessToken)
				.set('refreshToken', refreshToken),
		);
	}, []);

	return (
		<UserManagerContext.Provider value={{ user, setUser, logout, login }}>
			{children}
		</UserManagerContext.Provider>
	);
};
