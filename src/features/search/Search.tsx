import React from 'react';
import { useDispatch } from 'react-redux';

import { Coin } from 'processes/store/reducers/coinReducer/types';
import { Ticker } from '../../processes/store/reducers/tickerReducer/types';
import { actionSetTickerCreator } from '../../processes/store/reducers/tickerReducer/tickerReducer';
import { useTypedSelect } from '../../shared/providers/useTypedSelect';

interface SearchProps {
	inputSearch: string;
	coins?: Coin[];
}

export const Search = ({ inputSearch, coins }: SearchProps) => {
	const tickers = useTypedSelect(store => store.tickers.tickers);
	const dispatch = useDispatch();
	const autoCompleteLength = 4;

	const addTicker = (symbol: string) => {
		const ticker: Ticker = { symbol, USD: 0 };
		return () => {
			dispatch(actionSetTickerCreator(ticker));
		};
	};

	return (
		<div className='flex overflow-x-auto'>
			{(coins as Coin[])
				.filter((coin: Coin) => tickers.every(ticker => ticker.symbol !== coin.symbol))
				.filter((coin: Coin) => coin?.symbol?.includes(inputSearch))
				.slice(0, autoCompleteLength)
				.map((coin: Coin) => {
					return (
						<button
							key={coin.id}
							onClick={addTicker(coin.symbol)}
							className='search-button px-2 bg-blue-200
												hover:bg-blue-400 text-black rounded-br-md rounded-bl-md m-1 transition-all'>
							{coin.symbol}
						</button>
					);
				})}
		</div>
	);
};
