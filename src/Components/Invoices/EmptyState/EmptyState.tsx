import React from 'react'
import {useSelector} from 'react-redux'
import { state } from '../../..'
import illustration from '../../../assets/illustration-empty.svg'
import styles from './EmptyState.module.scss'

export const EmptyState = () => {
    const darkmode = useSelector((state:state) => state.darkmode)
    return (
			<div className={`${styles.Empty_State} ${darkmode? styles.darkmode : undefined}`}>
				<img src={illustration} alt='' aria-hidden='true' />
				<h2>There is nothing here</h2>
				<p>Create an invoice by clicking the</p>
				<p><strong>New Invoice</strong> button and get started</p>
			</div>
		);
}
