import { useState } from 'react';

export const useInput = () => {
	const [input, setInput] = useState<string>('');
	const setInputMod = (event: Event & { target: HTMLButtonElement }) => {
		setInput(() => event.target.value);
	};
	return [input, setInputMod];
};
