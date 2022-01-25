import { useState } from 'react';

export const useToggle = (initialBoolean: boolean) => {
	const [initial, setInitial] = useState<boolean>(initialBoolean);
	const setInitialMod = () => {
		setInitial(prev => !prev);
	};
	return [initial, setInitialMod];
};
