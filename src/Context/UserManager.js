import React from 'react';
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

	return (
		<UserManagerContext.Provider value={{ user, setUser }}>
			{children}
		</UserManagerContext.Provider>
	);
};
