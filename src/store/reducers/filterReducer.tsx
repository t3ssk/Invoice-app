import actionTypes from '../actions/index';

const initialState:[] = []
export type filterTerms = 'draft' | 'pending' | 'paid';

export type filterState = [] | filterTerms[];
interface filterAction {
    type: string,
    payload?: string
}

export const filterReducer = (state:filterState=initialState, action: filterAction) => {
    switch (action.type) {
			case actionTypes.UNSET_FILTER_TERM:
                const newState = state.filter(item => item !== action.payload)
				return newState;
            case actionTypes.SET_FILTER_TERM:
                return [...state, action.payload]

			default:
				return state;
		}
}