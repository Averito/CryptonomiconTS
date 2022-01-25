import { actionCoinsEnum, CoinsAction, ICoin } from './types';

const initialState: ICoin[] = [];

export const actionSetCoinsCreator = (payload: ICoin[]) => {
	return { type: actionCoinsEnum.SET_COINS, payload };
};

export const coinReducer = (state = initialState, action: CoinsAction) => {
	switch (action.type) {
		case actionCoinsEnum.SET_COINS:
			return [...state, action.payload];
		default:
			return state;
	}
};
