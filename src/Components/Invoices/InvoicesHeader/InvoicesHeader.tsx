import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive';
import arrowDown from '../../../assets/icon-arrow-down.svg'
import styles from './InvoicesHeader.module.scss'
import { InvoiceButton } from '../../UI/Buttons/Buttons'
import { state } from '../../..'
import actionTypes from '../../../store/actions';

interface InvoiceHeaderProps {
	numOfInvoices: number
}

export const InvoicesHeader:React.FC<InvoiceHeaderProps> = (props) => {

    const [showOpts, setShowOpts] = React.useState<boolean>(false)
    const darkmode = useSelector((state:state) => state.darkmode)
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
	const dispatch = useDispatch()

	let invoiceNumText = 'No invoices'
	if(props.numOfInvoices === 1){
		if(isMobile){invoiceNumText = '1 invoice'} else {
			invoiceNumText = 'There is 1 total invoice'
		}
	} 
	else if (props.numOfInvoices > 1) {
		if (isMobile){invoiceNumText = props.numOfInvoices + ' invoices';}
		else {invoiceNumText = `There are ${props.numOfInvoices} of total invoices`; }
	}

	const changeHandler = (event: any) => {
		const targ = event.target as HTMLInputElement
		if (targ.checked === false) {
			dispatch({type: actionTypes.UNSET_FILTER_TERM, payload: targ.value})
		} else {
			dispatch({ type: actionTypes.SET_FILTER_TERM, payload: targ.value });
		}
		
	}

    return (
			<div
				className={`${styles.Header_section} ${
					darkmode ? styles.Dark : undefined
				}`}>
				<div>
					<h1>Invoices</h1>
					<p>{invoiceNumText}</p>
				</div>
				<div className={styles.Header_interactive}>
					<div
						onClick={() => setShowOpts((prev) => !prev)}
						className={styles.Filter_triger}>
						<p>Filter{!isMobile && 'by status'}</p>
						<img src={arrowDown} alt='' />
					</div>
					<InvoiceButton onClick={()=>dispatch({type: actionTypes.OPEN_DRAWER_NEW_INVOICE})}/>
				</div>
				{showOpts && (
					<div className={styles.Filter_section}>
						<div>
							<label htmlFor='draft' className={styles.container}>
								Draft
								<input
									type='checkbox'
									id='draft'
									name='invoiceStatus'
									value='draft'
									onChange={changeHandler}
								/>
								<span className={styles.checkmark}></span>
							</label>
						</div>
						<div>
							<label htmlFor='pending' className={styles.container}>
								Pending
								<input
									type='checkbox'
									id='pending'
									name='invoiceStatus'
									value='pending'
									onChange={changeHandler}
								/>
								<span className={styles.checkmark}></span>
							</label>
						</div>
						<div>
							<label htmlFor='paid' className={styles.container}>
								Paid
								<input
									type='checkbox'
									id='paid'
									name='invoiceStatus'
									value='paid'
									onChange={changeHandler}
								/>
								<span className={styles.checkmark}></span>
							</label>
						</div>
					</div>
				)}
			</div>
		);
}
