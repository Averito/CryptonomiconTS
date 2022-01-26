import { call, put } from 'redux-saga/effects';

import { API, URL } from 'shared/api';
import { Coin } from 'processes/store/reducers/coinReducer/types';
import { actionSetCoinsCreator } from '../reducers/coinReducer/coinReducer';

type CoinsObject = { [key: string]: Coin };

function* workerSaga() {
	const coinsObj: CoinsObject = yield call(API.getCrypto, URL);
	const coins: Coin[] = [];
	for (const key in coinsObj) {
		coins.push(coinsObj[key]);
	}
	yield put(actionSetCoinsCreator(coins));
}

function* watchSaga() {
	yield workerSaga();
}

export function* rootCoinSaga() {
	yield watchSaga();
}
