export interface Ticker {
	symbol: string;
	USD: number;
}

export interface TickerState {
	tickers: Ticker[];
	currentPage: number;
	pageSize: number;
	currentForUpdateTicker: string;
	filter: string;
	error: string;
}

export enum ActionsTickerEnum {
	SET_TICKER = 'SET_TICKER',
	DELETE_TICKER = 'DELETE_TICKER',
	NEXT_PAGE = 'NEXT_PAGE',
	PREVIOUS_PAGE = 'PREVIOUS_PAGE',
	UPDATE_TICKER = 'UPDATE_TICKER',
	UPDATE_FILTER = 'UPDATE_FILTER',
	SET_ERROR = 'SET_ERROR',
	SET_NONE_ERROR = 'SET_NONE_ERROR'
}

export interface ActionSetTicker {
	type: ActionsTickerEnum.SET_TICKER;
	payload: Ticker;
}
export interface ActionDeleteTicker {
	type: ActionsTickerEnum.DELETE_TICKER;
	payload: string;
}
export interface ActionNextPage {
	type: ActionsTickerEnum.NEXT_PAGE;
}
export interface ActionPreviousPage {
	type: ActionsTickerEnum.PREVIOUS_PAGE;
}
export interface ActionUpdateTicker {
	type: ActionsTickerEnum.UPDATE_TICKER;
	payload: Ticker;
}
export interface ActionUpdateFilter {
	type: ActionsTickerEnum.UPDATE_FILTER;
	payload: string;
}
export interface ActionSetError {
	type: ActionsTickerEnum.SET_ERROR;
	payload: string;
}
export interface ActionSetNoneError {
	type: ActionsTickerEnum.SET_NONE_ERROR;
}

export type TickerActions =
	| ActionSetTicker
	| ActionDeleteTicker
	| ActionNextPage
	| ActionPreviousPage
	| ActionUpdateTicker
	| ActionUpdateFilter
	| ActionSetError
	| ActionSetNoneError;
