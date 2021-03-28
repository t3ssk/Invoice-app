const actionTypes = {
	DARKMODE_ON: 'DARKMODE_ON',
	DARKMODE_OFF: 'DARKMODE_OFF',
	SET_FILTER_TERM: 'SET_FILTER_TERM',
	UNSET_FILTER_TERM: 'UNSET_FILTER_TERM',
	INVOICE_FETCH_DATA: 'INVOICE_FETCH_DATA',
	INVOICE_DELETE: 'INVOICE_DELETE',
	INVOICE_MARK_PAID: 'INVOICE_MARK_PAID',
	INVOICE_ADD_NEW_AS_PENDING: 'INVOICE_ADD_NEW_AS_PENDING',
	INVOICE_EDIT: 'INVOICE_EDIT',
	OPEN_DRAWER_NEW_INVOICE: 'OPEN_DRAWER_NEW_INVOICE',
	OPEN_DRAWER_EDIT_INVOICE: 'OPEN_DRAWER_EDIT_INVOICE',
	CLOSE_DRAWER_ALL: 'CLOSE_DRAWER_ALL',
};

export interface darkmodeSwitchType {
    type: string
}




export default actionTypes