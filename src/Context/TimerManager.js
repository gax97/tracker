import { Map } from 'immutable';
import React from 'react';
import { usePersistedStorage } from '../Hooks/usePersistedStorage';
import { Loader } from '../Atoms/Loaders';

const initialState = Map({
	initialized: false,
	hasStartedTimer: false,
	startedTime: undefined,
	isRunning: false,
	endTime: undefined,
});
export const TimerContext = React.createContext({});

export const TimerManager = ({ children }) => {
	const [timer, setTimer, loading] = usePersistedStorage(initialState, 'timer');

	if (loading) {
		return <Loader />;
	}

	return (
		<TimerContext.Provider value={{ timer, setTimer, loading }}>
			{children}
		</TimerContext.Provider>
	);
};
