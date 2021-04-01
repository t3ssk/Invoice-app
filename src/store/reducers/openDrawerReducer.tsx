import actionTypes from "../actions";

export interface openDrawer {
	NewInvoice: boolean;
	EditInvoice: boolean;
	InvoiceId: null | string
} 
interface action {
    type: string,
	id?: string
}


const initialState = {
    NewInvoice: false,
    EditInvoice: false,
	InvoiceId: null
}


export const openDrawerReducer = (state:openDrawer=initialState, action:action) => {
    switch (action.type) {
			case actionTypes.OPEN_DRAWER_NEW_INVOICE:
				return { ...state, NewInvoice: true };
			case actionTypes.OPEN_DRAWER_EDIT_INVOICE:
				return { ...state, EditInvoice: true , InvoiceId: action.id};
            case actionTypes.CLOSE_DRAWER_ALL:
                return {NewInvoice:false, EditInvoice: false}
			default:
				return state;
		}
}