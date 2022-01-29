import { call, put, select, takeEvery } from 'redux-saga/effects';

import { ActionsTickerEnum, TickerState } from '../reducers/tickerReducer/types';
import { API, URL } from 'shared/api';
import { wait } from 'shared/providers/wait';
import { actionSetNoneErrorCreator, actionUpdateTickerCreator } from '../reducers/tickerReducer/tickerReducer';

function* workerSagaError() {
	yield wait(3000);
	yield put(actionSetNoneErrorCreator());
}

function* workerSaga() {
	const tickers: TickerState = yield select(state => state.tickers);
	const symbol = tickers.currentForUpdateTicker;
	const { USD } = yield call(() => API.getCostBySymbol(URL, symbol));
	yield put(actionUpdateTickerCreator({ symbol, USD }));
}

function* watchSaga() {
	yield takeEvery(ActionsTickerEnum.SET_TICKER, workerSaga);
	yield takeEvery(ActionsTickerEnum.SET_ERROR, workerSagaError);
}

export function* rootTickerSaga() {
	yield watchSaga();
}
