import React from 'react'
import { TextInput } from '../../UI/Inputs/Inputs'
import styles from '../BillFromSection/BillFromSection.module.scss'

export const BillToSection = (props:any) => {

    return (
			<div className={styles.Bill__To__Client}>
				<h4>Bill To</h4>
				<TextInput
					formik={props.formik}
					value={props.formik.values.clientsName}
                    onChange={props.formik.handleChange}
					name='clientsName'
					width='90%'
					type='text'>
					Client's Name
				</TextInput>
				<TextInput
					formik={props.formik}
                    value={props.formik.values.clientsEmail}
                    onChange={props.formik.handleChange}
					name='clientsEmail'
					width='90%'
					type='text'>
					Client's Name
				</TextInput>
			</div>
		);
}
