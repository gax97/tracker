import React, { useEffect, useLayoutEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { fromJS } from 'immutable';

export const usePersistedStorage = (initialState, key) => {
	const [state, setState] = React.useState(initialState);
	const [loading, setLoading] = React.useState(true);
	useLayoutEffect(() => {
		AsyncStorage.getItem(key)
			.then(u => {
				if (u) {
					const p = fromJS(JSON.parse(u));
					setState(p);
				}
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		AsyncStorage.setItem(key, JSON.stringify(state)).catch(e => {
			console.log(e);
		});
	}, [state]);

	return [state, setState, loading];
};
