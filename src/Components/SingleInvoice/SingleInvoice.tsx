import React from 'react'
import { useSelector } from 'react-redux';
import {useMediaQuery} from 'react-responsive'
import {useParams} from 'react-router-dom';
import { state } from '../..';
import {InvoiceActiveSection} from './InvoiceActiveSection/InvoiceActiveSection'
import { InvoiceInfo } from './InvoiceInfo/InvoiceInfo';

export const SingleInvoice = () => {
    let {invoiceid} = useParams<{invoiceid:string}>()
    const isMobile = useMediaQuery({ query: '(max-device-width: 570px)' });
    const invoices = useSelector((state:state) => state.invoice!)
    const singleInvoice = invoices.find(invoice=>invoice.id === invoiceid)!
    

    return (
			<>
				<InvoiceActiveSection invoiceid={invoiceid}>
					{isMobile && <InvoiceInfo invoice={singleInvoice} />}
				</InvoiceActiveSection>
				{!isMobile && <InvoiceInfo invoice={singleInvoice} />}
			</>
		);
}
