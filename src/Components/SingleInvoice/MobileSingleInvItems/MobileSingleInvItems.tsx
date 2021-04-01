import React from 'react'
import { useSelector } from 'react-redux';
import { state } from '../../..';
import { item } from '../../../store/reducers/InvoiceReducer';
import {singleInvoiceItemsProps} from '../SingleInvoiceItems/SingleInvoiceItems'
import styles from '../SingleInvoiceItems/SingleInvoiceItems.module.scss'


export const MobileSingleInvItems:React.FC<singleInvoiceItemsProps> = ({items}) => {
     const darkmode = useSelector((state: state) => state.darkmode);
			let total = 0;
			let content = <></>;
            if(items){
                items.forEach((item:item)=>total+= item.total)
                const itemRows = items.map((item:item)=>{
                    return (
											<div className={styles.ItemList_Rows} key={item.name}>
												<div>
													<p className={styles.Item__name}>{item.name}</p>
													<p>
														{item.quantity} x £ {item.price.toFixed(2)}
													</p>
												</div>
												<p className={styles.Item__total}>
													£ {item.total.toFixed(2)}
												</p>
											</div>
										);
                })
                content = (
									<div
										className={`${styles.ItemList} ${
											darkmode ? styles.Darkmode : undefined
										}`}>
										{itemRows}
										<div className={styles.ItemList__total}>
											<p>Grand Total</p>
											<h1>£ {total.toFixed(2)}</h1>
										</div>
									</div>
								);
            }
    
            return content
}
