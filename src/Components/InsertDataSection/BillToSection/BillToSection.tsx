import React from 'react'
import { TextInput } from '../../UI/Inputs/Inputs'
import styles from '../BillFromSection/BillFromSection.module.scss'

export const BillToSection = (props:any) => {

    return (
			<div className={styles.Bill__To}>
				<h4>Bill To</h4>
				<div className={styles.Input_LG}>
				<TextInput
					formik={props.formik}
					name='clientName'
					type='text'>
					Client's Name
				</TextInput>
				<TextInput
					formik={props.formik}
					name='clientEmail'
					type='text'>
					Client's Email
				</TextInput>
				<TextInput
					formik={props.formik}
					name='clientAddress.street'
					type='text'>
					Street Address
				</TextInput>
				</div>
				<div className={styles.Small__form_items}>
					<div className={styles.Input_SM}>
						<TextInput
							formik={props.formik}
							name='clientAddress.city'
							type='text'>
							City
						</TextInput>
					</div>
					<div className={styles.Input_SM}>
						<TextInput
							formik={props.formik}
							name='clientAddress.postCode'
							type='text'>
							Post Code
						</TextInput>
					</div>

					<div className={styles.Input_SM}>
						<TextInput
							formik={props.formik}
							name='clientAddress.country'
							type='text'>
							Country
						</TextInput>
					</div>
				</div>
			</div>
		);
}
