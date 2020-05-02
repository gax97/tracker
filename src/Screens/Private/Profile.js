import React, { useContext } from 'react';
import { GreenLink } from '../../Atoms/Links';
import { UserManagerContext } from '../../Context/UserManager';
import { CenterFlexStretch, PageWrapper } from '../../Atoms/Wrappers';
import { ThemeManagerContext } from '../../Context/ThemeManager';

export function Profile() {
	const { logout } = useContext(UserManagerContext);
	const ThemeContext = useContext(ThemeManagerContext);

	return (
		<PageWrapper>
			<GreenLink text="Logout" onPress={() => logout()} />
			<CenterFlexStretch>
				<GreenLink
					text="Change theme"
					onPress={() => ThemeContext.toggleTheme()}
				/>
			</CenterFlexStretch>
		</PageWrapper>
	);
}
