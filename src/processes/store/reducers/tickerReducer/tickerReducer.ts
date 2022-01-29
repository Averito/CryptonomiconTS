import {
	ActionDeleteTicker,
	ActionNextPage,
	ActionPreviousPage,
	ActionSetError,
	ActionSetNoneError,
	ActionSetTicker,
	ActionsTickerEnum,
	ActionUpdateFilter,
	ActionUpdateTicker,
	Ticker,
	TickerActions,
	TickerState
} from './types';

export const actionSetTickerCreator = (ticker: Ticker): ActionSetTicker => {
	return { type: ActionsTickerEnum.SET_TICKER, payload: ticker };
};
export const actionDeleteTickerCreator = (symbol: string): ActionDeleteTicker => {
	return { type: ActionsTickerEnum.DELETE_TICKER, payload: symbol };
};
export const actionNextPageCreator = (): ActionNextPage => {
	return { type: ActionsTickerEnum.NEXT_PAGE };
};
export const actionPreviousPageCreator = (): ActionPreviousPage => {
	return { type: ActionsTickerEnum.PREVIOUS_PAGE };
};
export const actionUpdateTickerCreator = (ticker: Ticker): ActionUpdateTicker => {
	return { type: ActionsTickerEnum.UPDATE_TICKER, payload: ticker };
};
export const actionUpdateFilterCreator = (filter: string): ActionUpdateFilter => {
	return { type: ActionsTickerEnum.UPDATE_FILTER, payload: filter };
};
export const actionSetErrorCreator = (error: string): ActionSetError => {
	return { type: ActionsTickerEnum.SET_ERROR, payload: error };
};
export const actionSetNoneErrorCreator = (): ActionSetNoneError => {
	return { type: ActionsTickerEnum.SET_NONE_ERROR };
};

const initialState: TickerState = {
	tickers: [],
	currentPage: 1,
	pageSize: 12,
	currentForUpdateTicker: '',
	filter: '',
	error: ''
};

export const tickerReducer = (state = initialState, action: TickerActions) => {
	switch (action.type) {
		case ActionsTickerEnum.SET_TICKER:
			return {
				...state,
				tickers: [...state.tickers, action.payload],
				currentPage: Math.ceil((state.tickers.filter(ticker => ticker.symbol.includes(state.filter)).length + 1) / state.pageSize),
				currentForUpdateTicker: action.payload.symbol
			};
		case ActionsTickerEnum.DELETE_TICKER:
			return {
				...state,
				tickers: state.tickers.filter(ticker => ticker.symbol !== action.payload),
				currentPage: Math.ceil((state.tickers.filter(ticker => ticker.symbol.includes(state.filter)).length - 1) / state.pageSize) || 1
			};
		case ActionsTickerEnum.NEXT_PAGE:
			if (state.tickers.filter(ticker => ticker.symbol.includes(state.filter)).length > state.pageSize * state.currentPage) {
				return {
					...state,
					currentPage: ++state.currentPage
				};
			}
			return state;
		case ActionsTickerEnum.PREVIOUS_PAGE:
			if (state.currentPage - 1 > 0) {
				return {
					...state,
					currentPage: --state.currentPage
				};
			}
			return state;
		case ActionsTickerEnum.UPDATE_TICKER:
			return {
				...state,
				tickers: [...state.tickers.filter(ticker => ticker.symbol !== action.payload.symbol), action.payload]
			};
		case ActionsTickerEnum.UPDATE_FILTER:
			return {
				...state,
				filter: action.payload.toUpperCase()
			};
		case ActionsTickerEnum.SET_ERROR:
			return {
				...state,
				error: action.payload
			};
		case ActionsTickerEnum.SET_NONE_ERROR:
			return {
				...state,
				error: 'NONE'
			};
		default:
			return state;
	}
};
