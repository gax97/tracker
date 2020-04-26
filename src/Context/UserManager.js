import React, { useCallback, useEffect } from 'react';
import { Map } from 'immutable';
import { Loader } from '../Atoms/Loaders';
import Api from '../Lib/api';
import { usePersistedStorage } from '../Hooks/usePersistedStorage';

export const UserManagerContext = React.createContext({});
const initialState = Map({
	username: undefined,
	email: undefined,
	accessToken: undefined,
	refreshToken: undefined,
	loggedIn: false,
});

export const UserManager = ({ children }) => {
	const [user, setUser, loading] = usePersistedStorage(initialState, 'user');
	const token = user.get('accessToken');
	useEffect(() => {
		Api.setToken(token);
	}, [token]);

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

	if (loading) {
		return <Loader />;
	}

	return (
		<UserManagerContext.Provider value={{ user, setUser, logout, login }}>
			{children}
		</UserManagerContext.Provider>
	);
};
