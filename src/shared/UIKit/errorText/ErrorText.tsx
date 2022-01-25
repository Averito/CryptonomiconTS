import React from 'react';

interface ErrorTextProp {
	type: string;
}

export const ErrorText = ({ type }: ErrorTextProp) => {
	if (type === 'NOT_FOUNDED') {
		return (
			<div className='text-error-1 text-red-500 text-bold mt-4 overflow-hidden h-0 transition-all'>
				Данной криптовалюты не существует
			</div>
		);
	}
	if (type === 'FOUNDED') {
		return (
			<div className='text-error-2 text-red-500 text-bold mt-4 overflow-hidden h-0 transition-all'>
				Данная криптовалюта уже добавлена
			</div>
		);
	}
	return <p></p>;
};
