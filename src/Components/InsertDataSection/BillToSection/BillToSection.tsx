import React from 'react'
import { TextInput } from '../../UI/Inputs/Inputs'
import styles from '../BillFromSection/BillFromSection.module.scss'

export const BillToSection = (props:any) => {
    return (
			<div className={styles.Bill__To}>
				<h4>Bill To</h4>
				<TextInput
					invalid={props.formik.touched.street && props.formik.errors.street !== undefined}
					name='clientsName'
					id='clientsName'
					onChange={props.formik.handleChange}
					value={props.formik.values.street}
					type='text'>
					Client's Name
				</TextInput>
				{props.formik.touched.country && props.formik.errors.country ? (
					<div className={styles.error}>{props.formik.errors.country}</div>
				) : null}
			</div>
		);
}
