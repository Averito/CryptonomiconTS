import { ActionsCoinEnum, Coin, CoinActions } from './types';

const initialState: Coin[] = [];

export const actionSetCoinsCreator = (payload: Coin[]) => {
	return { type: ActionsCoinEnum.SET_COINS, payload };
};

export const coinReducer = (state = initialState, action: CoinActions) => {
	switch (action.type) {
		case ActionsCoinEnum.SET_COINS:
			return [...state, ...action.payload];
		default:
			return state;
	}
};
