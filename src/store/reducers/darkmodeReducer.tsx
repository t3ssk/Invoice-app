import actionTypes from '../actions/index'

export interface darkmodeSwitchType {
	type: string;
}

export const darkmodeReducer = (state = false, action: darkmodeSwitchType) => {
    switch (action.type){
        case actionTypes.DARKMODE_ON:
            return true;
        case actionTypes.DARKMODE_OFF:
            return false;
        default: 
            return state;
    }
}