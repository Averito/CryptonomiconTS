import { call, put } from 'redux-saga/effects';

import { API, URL } from 'shared/api';
import { ICoin } from 'processes/store/reducers/coinReducer/types';
import { actionSetCoinsCreator } from '../reducers/coinReducer/coinReducer';

function* workerSaga() {
	const coins: ICoin[] = yield call(API.getCrypto, URL);
	yield put(actionSetCoinsCreator(coins));
}

function* watchSaga() {
	yield workerSaga();
}

export function* rootCoinSaga() {
	yield watchSaga();
}
