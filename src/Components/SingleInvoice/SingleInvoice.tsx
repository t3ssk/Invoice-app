import React from 'react'
import { useSelector } from 'react-redux';
import {useMediaQuery} from 'react-responsive'
import {useParams} from 'react-router-dom';
import { state } from '../..';
import { Modal } from '../UI/Modal/Modal';
import {InvoiceActiveSection} from './InvoiceActiveSection/InvoiceActiveSection'
import { InvoiceInfo } from './InvoiceInfo/InvoiceInfo';

export const SingleInvoice:React.FC = () => {
    let {invoiceid} = useParams<{invoiceid:string}>()
    const isMobile = useMediaQuery({ query: '(max-device-width: 620px)' });
    const invoices = useSelector((state:state) => state.invoice!)
    const singleInvoice = invoices.find(invoice=>invoice.id === invoiceid)!
	const modal = useSelector((state: state) => state.showModal);
    

    return (
			<>
				{modal===true ? <Modal /> : undefined}
				<InvoiceActiveSection invoiceid={invoiceid}>
					{isMobile && <InvoiceInfo invoice={singleInvoice} />}
				</InvoiceActiveSection>
				{!isMobile && <InvoiceInfo invoice={singleInvoice} />}
			</>
		);
}
