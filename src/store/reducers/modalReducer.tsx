import actionTypes from "../actions";



export const modalReducer = (state=false, action: {type: string})=> {
    switch (action.type) {
			case actionTypes.OPEN_MODAL:
				return true;
			case actionTypes.CLOSE_MODAL:
				return false;
			default:
				return state;
		}
}