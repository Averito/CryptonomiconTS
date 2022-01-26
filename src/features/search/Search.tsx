import React from 'react';
import { Coin } from 'processes/store/reducers/coinReducer/types';

interface SearchProps {
	inputSearch: string;
	coins?: Coin[];
}

export const Search = ({ inputSearch, coins }: SearchProps) => {
	const autoCompleteLength = 4;

	return (
		<div className='flex overflow-x-auto'>
			{(coins as Coin[])
				.filter((coin: Coin) => coin?.symbol?.includes(inputSearch))
				.slice(0, autoCompleteLength)
				.map((coin: Coin) => {
					return (
						<button
							key={coin.id}
							className='search-button px-2 bg-blue-200
												hover:bg-blue-400 text-black rounded-br-md rounded-bl-md m-1 transition-all'>
							{coin.symbol}
						</button>
					);
				})}
		</div>
	);
};
