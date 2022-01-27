import React from 'react';

import './index.css';
import { withRouter } from 'app/providers/withRouter';
import { FormCreate } from 'entities/formCreate/FormCreate';
import { Ticker } from 'entities/ticker/Ticker';
import { useTypedSelect } from 'shared/providers/useTypedSelect';

function App() {
	const tickers = useTypedSelect(store => store.tickers);
	return (
		<React.Fragment>
			<div className='container mx-auto flex flex-col items-center bg-blue-100 p-4'>
				<div className='container'>
					<div className='w-full my-4'></div>
					<FormCreate />
					<hr style={{ display: tickers.tickers.length > 0 ? '' : 'none' }} className='w-full border-t border-blue-600 my-4' />
					<dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3'>
						{tickers.tickers
							.filter(ticker => ticker.symbol.includes(tickers.filter))
							.slice((tickers.currentPage - 1) * tickers.pageSize, tickers.currentPage * tickers.pageSize)
							.map(ticker => {
								return <Ticker key={ticker.symbol} symbol={ticker.symbol} USD={ticker.USD} />;
							})}
					</dl>
				</div>
			</div>
		</React.Fragment>
	);
}

export default withRouter(App);
