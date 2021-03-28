import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router';
import 'firebase/database'
import {useMediaQuery} from 'react-responsive'
import { state } from '../../..';
import {
	ButtonTypeFive,
	ButtonTypeThree,
	ButtonTypeTwo,
} from '../../UI/Buttons/Buttons';
import styles from './InvoiceActiveSection.module.scss'
import arrowLeft from '../../../assets/icon-arrow-left.svg'
import { Link } from 'react-router-dom';
import actionTypes from '../../../store/actions';
interface SingleInvoiceProps {
    invoiceid: string,
    children?: React.ReactNode
}
export const InvoiceActiveSection = (props: SingleInvoiceProps) => {
    const darkmode = useSelector((state:state) => state.darkmode)
	const invoices = useSelector((state:state) => state.invoice)
    const isMobile = useMediaQuery({query: '(max-device-width: 570px)'});
	const dispatch = useDispatch()

	const singleInvoice = invoices!.find(
		(invoice) => invoice.id === props.invoiceid
	)!;
	const history = useHistory()
    
	const deleteHandler = (id: string):void => {
		dispatch({ type: actionTypes.INVOICE_DELETE, id });
		localStorage.setItem('data', JSON.stringify(invoices))
		history.push('/')
	}
	const markPaidHandler = (id:string):void => {
		dispatch({type: actionTypes.INVOICE_MARK_PAID, id})
		localStorage.setItem('data', JSON.stringify(invoices));
	}
	
	return (!singleInvoice?
			 <p>Loading</p> : (<>
			<Link
				to='/'
				className={`${styles.Go_Back} ${
					darkmode ? styles.Darkmode : undefined
				}`}>
				<img src={arrowLeft} alt='' />
				Go back
			</Link>
			<div
				className={`${styles.ActiveSection} ${
					isMobile ? styles.mobile : undefined
				} ${darkmode ? styles.Darkmode : undefined}`}>
				<div className={`${styles.Status_container}`}>
					<p>Status</p>
					<p
						className={`${styles.Status} ${
							singleInvoice && styles[singleInvoice.status]
						}`}>
						{singleInvoice ? singleInvoice.status : 'Loading...'}
					</p>
				</div>
				{isMobile && props.children}
				<div className={styles.Buttons_Mobile}>
					<ButtonTypeThree
						onClick={() =>
							dispatch({
								type: actionTypes.OPEN_DRAWER_EDIT_INVOICE,
								id: singleInvoice.id,
							})
						}>
						Edit
					</ButtonTypeThree>
					<ButtonTypeFive onClick={() => deleteHandler(props.invoiceid)}>
						Delete
					</ButtonTypeFive>
					{singleInvoice.status !== 'paid' && (
						<ButtonTypeTwo onClick={() => markPaidHandler(props.invoiceid)}>
							Mark as Paid
						</ButtonTypeTwo>
					)}
				</div>
			</div>
			
		</>)
	);
};
