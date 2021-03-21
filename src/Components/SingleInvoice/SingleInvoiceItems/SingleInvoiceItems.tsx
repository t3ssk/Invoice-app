import React from 'react'
import { useSelector } from 'react-redux';
import { state } from '../../..';
import { item } from '../../../store/reducers/InvoiceReducer'
import styles from './SingleInvoiceItems.module.scss'

export interface singleInvoiceItemsProps{
    items: item[],
}

export const SingleInvoiceItems = ({items}: singleInvoiceItemsProps) => {
    const darkmode = useSelector((state: state) => state.darkmode);
    let total = 0
    let content = <></>
    if(items)
    {
        items.forEach((item:item)=> total += item.total)
        const tableRows = items.map((item:item)=>(<tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>£ {item.price.toFixed(2)}</td>
            <td>£ {item.total.toFixed(2)}</td>
        </tr>))
        content = (<div className={`${styles.ItemList} ${darkmode? styles.Darkmode : undefined}`}>
                <table>
                    <tr>
                        <th>Item Name</th>
                        <th>QTY.</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    {tableRows}
                </table>
				<div className={styles.ItemList__total}>
					<p>Amount Due</p>
					<h1>£ {total.toFixed(2)}</h1>
				</div>
			</div>)
    }
    return content;
}
