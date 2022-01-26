import { useState, useCallback, ChangeEvent } from 'react';

export const useInput = () => {
	const [input, setInput] = useState<string>('');
	const setInputMod = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.currentTarget.value);
	}, []);
	return { input, setInput: setInputMod };
};
