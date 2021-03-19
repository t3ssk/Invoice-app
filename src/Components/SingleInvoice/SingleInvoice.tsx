import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useMediaQuery} from 'react-responsive'
import {useParams} from 'react-router-dom';
import { state } from '../..';
import {InvoiceActiveSection} from './InvoiceActiveSection/InvoiceActiveSection'
import { InvoiceState } from '../../store/reducers/InvoiceReducer';
import actionTypes from '../../store/actions';
import { InvoiceInfo } from './InvoiceInfo/InvoiceInfo';

export const SingleInvoice = () => {
    let {invoiceid} = useParams<{invoiceid:string}>()
    const isMobile = useMediaQuery({ query: '(max-device-width: 570px)' });
    const dispatch = useDispatch()
    const invoices = useSelector((state:state) => state.invoice!)
    const singleInvoice = invoices.find(invoice=>invoice.id === invoiceid)!
    

    return (
			<>
				<InvoiceActiveSection invoiceid={invoiceid} invoices={invoices}>
					{isMobile && <InvoiceInfo invoice={singleInvoice} />}
				</InvoiceActiveSection>
				{!isMobile && <InvoiceInfo invoice={singleInvoice} />}
			</>
		);
}
