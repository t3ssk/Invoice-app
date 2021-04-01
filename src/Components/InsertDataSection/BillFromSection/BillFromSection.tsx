import React from 'react'
import styles from './BillFromSection.module.scss'
import {FormikProps} from 'formik'
import { TextInput } from '../../UI/Inputs/Inputs';
import {initVals} from '../InsertDataLayout'

interface BillFromProps {
	formik: FormikProps<initVals>
}
export const BillFromSection: React.FC<BillFromProps> = (props) => {
	return (
		<div className={styles.Bill__To}>
			
				<h4>Bill from</h4>
				<div className={styles.Input_LG}>
				<TextInput
					formik={props.formik}
					name='senderAddress.street'
					type='text'>
					Street Address
				</TextInput></div>

				<div className={styles.Small__form_items}>
					<div className={styles.Input_SM}>
						<TextInput
							formik={props.formik}
							name='senderAddress.city'
							type='text'>
							City
						</TextInput>
					</div>
					<div className={styles.Input_SM}>
						<TextInput
							formik={props.formik}
							name='senderAddress.postCode'
							type='text'>
							Post Code
						</TextInput>
					</div>

					<div className={styles.Input_SM}>
						<TextInput
							formik={props.formik}
							name='senderAddress.country'
							type='text'>
							Country
						</TextInput>
					</div>
				</div>
		</div>
	);
};
