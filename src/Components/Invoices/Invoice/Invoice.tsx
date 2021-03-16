import React from 'react'
import {useSelector} from 'react-redux'
import { state } from '../../..';
import arrowright from '../../../assets/icon-arrow-right.svg';
import styles from './Invoice.module.scss'

export const Invoice = () => {
    const [status, setStatus] = React.useState<any>('Paid')
    const darkmode = useSelector((state:state) => state.darkmode)
    return (
			<div className={`${styles.Invoice_info} ${darkmode? styles.darkmode : undefined}`}>
				<h3>RT3080</h3>
				<p className={styles.Due}>Due 19 Aug 2021</p>
				<p className={styles.Name}>Jensen Huang</p>
				<h2>£ 1,800.90</h2>
                <p className={`${styles.status} ${styles[status]}`}>{status}</p>
                <button><img src={arrowright} alt=""/></button>
			</div>
		);
}
