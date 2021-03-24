import React, {useState} from 'react'
import {useFormik} from 'formik'
import styles from './BillFromSection.module.scss'
import { TextInput } from '../../UI/Inputs/Inputs';
import {validationSchema} from '../../../utils/validationschema'
import { ButtonSection } from '../ButtonSection/ButtonSection';
import { BillToSection } from '../BillToSection/BillToSection';

export const BillFromSection = (props: any) => {
    const formik = useFormik({
			initialValues: { street: '', city: '', postCode: '', country: '', clientsName: '' },
			onSubmit: (values: any) => {
				console.log(values);
			},
			validationSchema: validationSchema
		});

   

	return (
		<div className={styles.Bill__To}>
			<form onSubmit={formik.handleSubmit}>
				<h4>Bill from</h4>

				<TextInput
					invalid={formik.touched.street && formik.errors.street !== undefined}
					name='street'
					id='street'
					width='90%'
					padding='0 10px'
					onChange={formik.handleChange}
					value={formik.values.street}
					type='text'>
					Street Address
				</TextInput>
				{formik.touched.street && formik.errors.street ? (
					<div className={styles.error}>{formik.errors.street}</div>
				) : null}
				<div className={styles.Small__form_items}>
					<div>
						<TextInput
							invalid={formik.touched.city && formik.errors.city !== undefined}
							id='city'
							name='city'
							width='80%'
							padding='0 10px'
							onChange={formik.handleChange}
							value={formik.values.city}
							type='text'>
							City
						</TextInput>
						{formik.touched.city && formik.errors.city ? (
							<div className={styles.error}>{formik.errors.city}</div>
						) : null}
					</div>
					<div>
						<TextInput
							invalid={
								formik.touched.postCode && formik.errors.postCode !== undefined
							}
							name='postCode'
							id='postCode'
							width='80%'
							padding='0 10px'
							onChange={formik.handleChange}
							value={formik.values.postCode}
							type='text'>
							Post Code
						</TextInput>

						{formik.touched.postCode && formik.errors.postCode ? (
							<div className={styles.error}>{formik.errors.postCode}</div>
						) : null}
					</div>

					<div>
						<TextInput
							invalid={
								formik.touched.country && formik.errors.country !== undefined
							}
							id='country'
							name='country'
							width='80%'
							padding='0 10px'
							onChange={formik.handleChange}
							value={formik.values.country}
							type='text'>
							Country
						</TextInput>
						{formik.touched.country && formik.errors.country ? (
							<div className={styles.error}>{formik.errors.country}</div>
						) : null}
					</div>
				</div>
                <BillToSection formik={formik} />
				<ButtonSection />
			</form>
		</div>
	);
};
