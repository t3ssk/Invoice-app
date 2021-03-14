import { act } from '@testing-library/react'
import actionTypes, {darkmodeSwitchType} from '../actions/index'

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