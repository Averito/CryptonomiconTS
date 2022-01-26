export interface Coin {
	data_available_from: number;
	id: number;
	partner_symbol: string;
	symbol: string;
}

export enum ActionsCoinEnum {
	SET_COINS = 'SET_COINS'
}

export interface ActionSetCoins {
	type: ActionsCoinEnum.SET_COINS;
	payload: Coin[];
}

export type CoinActions = ActionSetCoins;
