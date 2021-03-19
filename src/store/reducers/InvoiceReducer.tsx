import actionTypes from '../actions/'
const initialState:[] = []

type address = {city: string, 
        country: string, 
        postCode: string, 
        street: string}
export interface item {
	name: string;
	price: number;
	quantity: number;
	total: number;
}
export interface InvoiceState {
	id: string;
	paymentDue: string;
	paymentTerms: number;
	status: 'draft' | 'pending' | 'paid';
	clientAddress: address;
	clientEmail: string;
	clientName: string;
	createdAt: string;
	description: string;
	total: number;
	items: item[];
	senderAddress: address;
};


interface invoiceAction {
    type: string
    data?: InvoiceState
}
export const InvoiceReducer = (state: [] | InvoiceState[] = initialState, action: invoiceAction) => {
    switch (action.type) {
        case actionTypes.INVOICE_FETCH_DATA:
            return action.data    
        ;
        default:
            return state;
    }

};