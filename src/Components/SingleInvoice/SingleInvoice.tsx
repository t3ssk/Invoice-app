import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import { state } from '../..';
import {InvoiceActiveSection} from './InvoiceActiveSection/InvoiceActiveSection'
import { InvoiceState } from '../../store/reducers/InvoiceReducer';
import actionTypes from '../../store/actions';

export const SingleInvoice = () => {
    let {invoiceid} = useParams<{invoiceid:string}>()
    const dispatch = useDispatch()
    const invoices = useSelector((state:state) => state.invoice!)
    const singleInvoice = invoices.find(invoice=>invoice.id === invoiceid)!
    

    return (
			<div>
				<InvoiceActiveSection invoiceid={invoiceid} invoices={invoices}/>
			</div>
		);
}
