import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelect } from 'shared/providers/useTypedSelect';
import { actionUpdateFilterCreator } from '../../processes/store/reducers/tickerReducer/tickerReducer';

export const Filter = () => {
	const tickers = useTypedSelect(store => store.tickers);
	const dispatch = useDispatch();
	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(actionUpdateFilterCreator(event.currentTarget.value));
	};
	return (
		<div>
			<input name='filter' value={tickers.filter} onChange={onChangeInput} />
		</div>
	);
};
