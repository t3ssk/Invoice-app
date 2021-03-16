import React from 'react'
import {useSelector} from 'react-redux'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { state } from '../../..';
import arrowright from '../../../assets/icon-arrow-right.svg';
import { getFormattedDateFromString } from '../../../utils';
import styles from './Invoice.module.scss'

interface invoiceProps {
	id: string, 
	due: string, 
	name: string,
	status: string,
	total: number
}
export const Invoice = (props:invoiceProps) => {
    const darkmode = useSelector((state:state) => state.darkmode)
	const date = getFormattedDateFromString(props.due)
	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });


    return (

			<div
				className={`${styles.Invoice_info} ${
					darkmode ? styles.darkmode : undefined
				}`}>
				<h3>{props.id}</h3>
				<p className={styles.Due}>Due {date}</p>
				<p className={styles.Name}>{props.name}</p>
				<h2>£ {props.total}</h2>
				<p className={`${styles.status} ${styles[props.status]}`}>
					{props.status}
				</p>
				<button>
					<Link to={`/invoice/${props.id}`}>
					<img src={arrowright} alt='' /></Link>
				</button>
			</div>
		);
}
