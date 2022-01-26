import {
	ActionDeleteTicker,
	ActionNextPage,
	ActionPreviousPage,
	ActionSetTicker,
	ActionsTickerEnum,
	ActionUpdateTicker,
	Ticker,
	TickerActions,
	TickerState
} from './types';

export const actionSetTickerCreator = (ticker: Ticker): ActionSetTicker => {
	return { type: ActionsTickerEnum.SET_TICKER, payload: ticker };
};
export const actionDeleteTickerCreator = (
	symbol: string
): ActionDeleteTicker => {
	return { type: ActionsTickerEnum.DELETE_TICKER, payload: symbol };
};
export const actionNextPageCreator = (): ActionNextPage => {
	return { type: ActionsTickerEnum.NEXT_PAGE };
};
export const actionPreviousPageCreator = (): ActionPreviousPage => {
	return { type: ActionsTickerEnum.PREVIOUS_PAGE };
};
export const actionUpdateTickerCreator = (
	ticker: Ticker
): ActionUpdateTicker => {
	return { type: ActionsTickerEnum.UPDATE_TICKER, payload: ticker };
};

const initialState: TickerState = {
	tickers: [],
	currentPage: 1,
	pageSize: 24,
	currentForUpdateTicker: ''
};

export const tickerReducer = (state = initialState, action: TickerActions) => {
	switch (action.type) {
		case ActionsTickerEnum.SET_TICKER:
			return {
				...state,
				tickers: [...state.tickers, action.payload],
				currentPage:
					state.tickers.length + 1 < state.currentPage * state.pageSize
						? Math.floor(state.tickers.length / state.pageSize)
						: state.currentPage,
				currentForUpdateTicker: action.payload.symbol
			};
		case ActionsTickerEnum.DELETE_TICKER:
			return {
				...state,
				tickers: state.tickers.filter(
					ticker => ticker.symbol !== action.payload
				)
			};
		case ActionsTickerEnum.NEXT_PAGE:
			if (state.tickers.length > state.pageSize * state.currentPage) {
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
				tickers: [
					...state.tickers.filter(
						ticker => ticker.symbol !== action.payload.symbol
					),
					action.payload
				]
			};
		default:
			return state;
	}
};
