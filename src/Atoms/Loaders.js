import styled from 'styled-components';
import { Overlay, overlayCss } from './Wrappers';
import React from "react";

export const Loader = styled.ActivityIndicator`
	${overlayCss};
`;

export function OverlayLoader({loading}) {
	if (!loading) {
		return null;
	}

	return (
		<Overlay>
			<Loader color="white" size="large" />
		</Overlay>
	);
}
