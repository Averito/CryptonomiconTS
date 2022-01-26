import { useState, useCallback } from 'react';

export const useToggle = (initialBoolean: boolean) => {
	const [initial, setInitial] = useState<boolean>(initialBoolean);
	const setInitialMod = useCallback(() => {
		setInitial(prev => !prev);
	}, []);
	return { initial, setInitial: setInitialMod };
};
