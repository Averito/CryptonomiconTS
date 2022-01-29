import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { Search } from 'features/search/Search';
import { Button } from 'shared/UIKit/button/Button';
import { ErrorText } from 'shared/UIKit/errorText/ErrorText';
import { useInput } from 'shared/providers/useInput';
import { Coin } from 'processes/store/reducers/coinReducer/types';
import { useTypedSelect } from 'shared/providers/useTypedSelect';
import { Pagination } from 'features/pagination/Pagination';
import { actionNextPageCreator, actionPreviousPageCreator, actionSetErrorCreator, actionSetTickerCreator } from 'processes/store/reducers/tickerReducer/tickerReducer';
import { Filter } from 'features/filter/Filter';
import { Ticker } from 'processes/store/reducers/tickerReducer/types';

export const FormCreate = (): ReactElement => {
	const coins: Coin[] = useTypedSelect(store => store.coins);
	const tickers = useTypedSelect(store => store.tickers);

	const dispatch = useDispatch();

	const { input: inputSearch, setInput: setInputSearch } = useInput();

	const addTicker = (symbol: string) => {
		const ticker: Ticker = { symbol, USD: 0 };
		if (coins.every((coin: Coin) => coin.symbol !== symbol)) {
			return () => {
				setTimeout(() => actionSetErrorCreator('NONE'), 3000);
				dispatch(actionSetErrorCreator('NOT_FOUNDED'));
			};
		}
		if (tickers.tickers.some((ticker: Ticker) => ticker.symbol === symbol)) {
			return () => {
				setTimeout(() => actionSetErrorCreator('NONE'), 3000);
				dispatch(actionSetErrorCreator('FOUNDED'));
			};
		}
		return () => dispatch(actionSetTickerCreator(ticker));
	};

	const nextPage = () => {
		dispatch(actionNextPageCreator());
	};
	const previousPage = () => {
		dispatch(actionPreviousPageCreator());
	};

	return (
		<section>
			<div className='flex'>
				<div className='max-w-xs'>
					<label htmlFor='wallet' className='block text-sm font-medium text-blue-700'>
						Тикер
					</label>
					<div className='mt-1 relative rounded-md shadow-md'>
						<input
							onChange={setInputSearch}
							value={inputSearch.toUpperCase()}
							type='text'
							name='wallet'
							id='wallet'
							className='block w-full pr-10 border-blue-300 text-blue-900 focus:outline-none focus:ring-blue-500
									focus:border-blue-500 sm:text-sm rounded-md'
							placeholder='Например DOGE'
						/>
						<Search inputSearch={inputSearch} coins={coins} tickers={tickers.tickers} />
					</div>
				</div>
			</div>
			<ErrorText type={tickers.error} />
			<Button type='ADD' onClick={addTicker(inputSearch.toUpperCase())}>
				Добавить
			</Button>
			<Filter />
			<Pagination nextPage={nextPage} previousPage={previousPage} />
			<p>Текущая страница: {tickers.currentPage}</p>
		</section>
	);
};
