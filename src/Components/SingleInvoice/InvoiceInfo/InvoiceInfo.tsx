import React from 'react'
import {useSelector} from 'react-redux'
import {useMediaQuery} from 'react-responsive';
import { state } from '../../..'
import { InvoiceState } from '../../../store/reducers/InvoiceReducer'
import { MobileSingleInvItems } from '../MobileSingleInvItems/MobileSingleInvItems';
import { SingleInvoiceItems } from '../SingleInvoiceItems/SingleInvoiceItems'
import styles from './InvoiceInfo.module.scss'

interface SingleInvoiceProps {
    invoice: InvoiceState
}

export const InvoiceInfo = ({invoice}: SingleInvoiceProps) => {
    const darkmode = useSelector((state:state) => state.darkmode)
    const isMobile = useMediaQuery({query: `(max-device-width: 570px)`})
    let content =  <h1>Loading...</h1>
    if(invoice){
        content = (
					<div className={`${styles.Invoice__info} ${darkmode? styles.Darkmode : undefined}`}>
						<div className={styles.Invoice__ident__container}>
							<div className={styles.Invoice__ident}>
								<h2>{invoice.id}</h2>
                                <p>{invoice.description}</p>
							</div>
							<address>
								<p>{invoice.senderAddress.street}</p>
								<p>{invoice.senderAddress.city}</p>
								<p>{invoice.senderAddress.postCode}</p>
								<p>{invoice.senderAddress.country}</p>
							</address>
						</div>
						<div className={styles.Invoice__info__container}>
							<div className={styles.Invoice__info_date}>
								<p>Invoice date</p>
								<h3>{invoice.createdAt}</h3>
								<p> Payment Due</p>
								<h3>{invoice.paymentDue}</h3>
							</div>
							<div className={styles.Invoice__info_billing}>
								<p>Bill to</p>
								<h3>{invoice.clientName}</h3>
								<address>
									<p>{invoice.clientAddress.street}</p>
									<p>{invoice.clientAddress.city}</p>
									<p>{invoice.clientAddress.postCode}</p>
									<p>{invoice.clientAddress.country}</p>
								</address>
							</div>
							<div className={styles.Invoice__info_email}>
								<p> Sent to</p>
								<h3>{invoice.clientEmail}</h3>
							</div>
						</div>
                        {!isMobile ? <SingleInvoiceItems items={invoice.items}/> : <MobileSingleInvItems items={invoice.items}/>}
					</div>
				);
    }
    return content;
}
