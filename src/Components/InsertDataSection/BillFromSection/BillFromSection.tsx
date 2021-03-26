import React from 'react'
import {useFormik} from 'formik'
import { nanoid } from 'nanoid';
import moment from 'moment';
import styles from './BillFromSection.module.scss'
import { TextInput } from '../../UI/Inputs/Inputs';
import {validationSchema} from '../../../utils/validationschema'
import { ButtonSection } from '../ButtonSection/ButtonSection';
import { BillToSection } from '../BillToSection/BillToSection';

export const BillFromSection = (props: any) => {
    const formik = useFormik({
			initialValues: {
                senderAddress:{
				street: '',
				city: '',
				postCode: '',
				country: ''},
				clientsName: '',
                clientsEmail: ''
			},
			onSubmit: (values: any) => {
				const endVals = { ...values, id: nanoid(6), createdAt: moment(Date.now()).format('YYYY-MM-DD')};
				console.log(endVals);
			},
			//validationSchema: validationSchema,
		});
        
	return (
		<div className={styles.Bill__To}>
			<form onSubmit={formik.handleSubmit}>
				<h4>Bill from</h4>

				<TextInput
					formik={formik}
					value={formik.values.senderAddress.street}
					onChange={formik.handleChange}
					name='senderAddress.street'
					width='90%'
					padding='0 10px'
					type='text'>
					Street Address
				</TextInput>

				<div className={styles.Small__form_items}>
					<div>
						<TextInput
							formik={formik}
							value={formik.values.senderAddress.city}
							onChange={formik.handleChange}
							name='senderAddress.city'
							width='80%'
							padding='0 10px'
							type='text'>
							City
						</TextInput>
					</div>
					<div>
						<TextInput
							formik={formik}
							value={formik.values.senderAddress.postCode}
							onChange={formik.handleChange}
							name='senderAddress.postCode'
							width='80%'
							padding='0 10px'
							type='text'>
							Post Code
						</TextInput>
					</div>

					<div>
						<TextInput
							formik={formik}
							value={formik.values.senderAddress.country}
							onChange={formik.handleChange}
							name='senderAddress.country'
							width='80%'
							padding='0 10px'
							type='text'>
							Country
						</TextInput>
					</div>
				</div>
				<BillToSection formik={formik} />
				<ButtonSection />
			</form>
		</div>
	);
};
