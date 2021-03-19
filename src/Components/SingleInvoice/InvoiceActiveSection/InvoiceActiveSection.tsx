import React from 'react';
import {useSelector} from 'react-redux'
import {useMediaQuery} from 'react-responsive'
import { state } from '../../..';
import { InvoiceState } from '../../../store/reducers/InvoiceReducer';
import {
	ButtonTypeFive,
	ButtonTypeThree,
	ButtonTypeTwo,
} from '../../UI/Buttons/Buttons';
import styles from './InvoiceActiveSection.module.scss'
import arrowLeft from '../../../assets/icon-arrow-left.svg'
import { Link } from 'react-router-dom';
interface SingleInvoiceProps {
    invoices: InvoiceState[],
    invoiceid: string,
    children?: React.ReactNode
}
export const InvoiceActiveSection = (props: SingleInvoiceProps) => {
    const darkmode = useSelector((state:state) => state.darkmode)
    const isMobile = useMediaQuery({query: '(max-device-width: 570px)'});

	const singleInvoice = props.invoices.find(
		(invoice) => invoice.id === props.invoiceid
	)!;
        console.log(props.invoices)
	return (
        <>
        <Link to="/" className={`${styles.Go_Back} ${darkmode? styles.Darkmode : undefined}`}><img src={arrowLeft} alt=""/>Go back</Link>
		<div
			className={`${styles.ActiveSection} ${
				isMobile ? styles.mobile : undefined
			} ${darkmode ? styles.Darkmode : undefined}`}>
			<div
				className={`${styles.Status_container}`}>
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
				<ButtonTypeThree>Edit</ButtonTypeThree>
				<ButtonTypeFive>Delete</ButtonTypeFive>
				<ButtonTypeTwo>Mark as Paid</ButtonTypeTwo>
			</div>
		</div>
        </>
	);
};
