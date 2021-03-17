import React from 'react';
import { InvoiceState } from '../../../store/reducers/InvoiceReducer';
import {
	ButtonTypeFive,
	ButtonTypeThree,
	ButtonTypeTwo,
} from '../../UI/Buttons/Buttons';
import styles from './InvoiceActiveSection.module.scss'
interface SingleInvoiceProps {
    invoices: InvoiceState[],
    invoiceid: string
}
export const InvoiceActiveSection = (props: SingleInvoiceProps) => {
	const singleInvoice = props.invoices.find(
		(invoice) => invoice.id === props.invoiceid
	)!;
        console.log(props.invoices)
	return (
			<div className={styles.ActiveSection}>
				<div>
					<p>Status</p>
					<p>{singleInvoice ? singleInvoice.status : 'Loading...'}</p>
				</div>
				<div>
					<ButtonTypeThree>Edit</ButtonTypeThree>
					<ButtonTypeFive>Delete</ButtonTypeFive>
					<ButtonTypeTwo>Mark as Paid</ButtonTypeTwo>
				</div>
			</div>
	);
};
