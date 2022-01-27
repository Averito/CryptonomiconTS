import React from 'react';

import { Button } from 'shared/UIKit/button/Button';
import { useDispatch } from 'react-redux';
import { actionDeleteTickerCreator } from '../../processes/store/reducers/tickerReducer/tickerReducer';

interface TickerProp {
	symbol: string;
	USD: number;
}

export const Ticker = ({ symbol, USD }: TickerProp) => {
	const dispatch = useDispatch();
	const deleteTicker = (symbol: string) => {
		return () => {
			dispatch(actionDeleteTickerCreator(symbol));
		};
	};
	return (
		<div className='bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer'>
			<div className='px-4 py-5 sm:p-6 text-center'>
				<dt className='text-sm font-medium text-blue-500 truncate'>{symbol} - USD</dt>
				<dd className='mt-1 text-3xl font-semibold text-blue-900'>{USD || 'unknown'}</dd>
			</div>
			<div className='w-full border-t border-blue-200'></div>
			<Button type='DELETE' onClick={deleteTicker(symbol)}>
				Удалить
			</Button>
		</div>
	);
};
