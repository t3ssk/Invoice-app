import React from 'react'
import {useSelector} from 'react-redux'
import arrowDown from '../../../assets/icon-arrow-down.svg'
import styles from './InvoicesHeader.module.scss'
import { InvoiceButton } from '../../UI/Buttons/Buttons'
import { state } from '../../..'

export const InvoicesHeader = () => {
    const [showOpts, setShowOpts] = React.useState(false)
    const darkmode = useSelector((state:state) => state.darkmode)

    return (
			<div
				className={`${styles.Header_section} ${
					darkmode ? styles.Dark : undefined
				}`}>
				<div>
					<h1>Invoices</h1>
					<p>No invoices</p>
				</div>
				<div className={styles.Header_interactive}>
					<div
						onClick={() => setShowOpts((prev) => !prev)}
						className={styles.Filter_triger}>
						<p>Filter by status</p>
						<img src={arrowDown} alt='' />
					</div>
					<InvoiceButton />
				</div>
				{showOpts && (
					<div className={styles.Filter_section}>
						<div>
							<label htmlFor='draft' className={styles.container}>
								Draft
								<input
									type='radio'
									id='draft'
									name='invoiceStatus'
									value='male'
								/>
								<span className={styles.checkmark}></span>
							</label>
						</div>
						<div>
							<label htmlFor='pending' className={styles.container}>
								Pending
								<input
									type='radio'
									id='pending'
									name='invoiceStatus'
									value='pending'
								/>
								<span className={styles.checkmark}></span>
							</label>
						</div>
						<div>
							<label htmlFor='paid' className={styles.container}>
								Paid
								<input
									type='radio'
									id='paid'
									name='invoiceStatus'
									value='paid'
								/>
							
							<span className={styles.checkmark}></span>
                            </label>
						</div>
					</div>
				)}
			</div>
		);
}
