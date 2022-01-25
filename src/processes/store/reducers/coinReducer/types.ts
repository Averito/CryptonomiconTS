export interface ICoin {
	data_available_from: number;
	id: number;
	partner_symbol: string;
	symbol: string;
}

export enum actionCoinsEnum {
	SET_COINS = 'SET_COINS'
}

export interface actionSetCoins {
	type: actionCoinsEnum.SET_COINS;
	payload: ICoin[];
}

export type CoinsAction = actionSetCoins;
