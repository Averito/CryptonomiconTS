import { takeEvery, call, select, put } from 'redux-saga/effects';

import {
	ActionsTickerEnum,
	TickerState
} from '../reducers/tickerReducer/types';
import { API, URL } from '../../../shared/api';
import { actionUpdateTickerCreator } from '../reducers/tickerReducer/tickerReducer';

function* workerSaga() {
	const tickers: TickerState = yield select(state => state.tickers);
	const symbol = tickers.currentForUpdateTicker;
	const { USD } = yield call(() => API.getCostBySymbol(URL, symbol));
	yield put(actionUpdateTickerCreator({ symbol, USD }));
}

function* watchSaga() {
	yield takeEvery(ActionsTickerEnum.SET_TICKER, workerSaga);
}

export function* rootTickerSaga() {
	yield watchSaga();
}
