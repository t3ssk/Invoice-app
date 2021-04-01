import React, {useState, useEffect} from 'react'
import { FieldArray, FormikProps, useFormikContext } from 'formik';
import {nanoid} from 'nanoid'
import { AddNewItemBtn } from '../../UI/Buttons/Buttons'
import styles from './ItemList.module.scss'
import { SingleItem } from './SingleItem'
import { initVals } from '../InsertDataLayout';

interface ItemListProps {
	formik: FormikProps<initVals>;
	error?: undefined | string | string[]
}
export const ItemList:React.FC<ItemListProps> = (props) => {

	const { values } = useFormikContext<any>();

    return (
			<div className={styles.Items_List}>
				<h2>Item List</h2>
				<div className={styles.Items_Naming}>
					<p className={styles.Name_name}>Item Name</p>
					<p className={styles.Name_qty}>Qty.</p>
					<p className={styles.Name_price}>Price</p>
					<p className={styles.Name_total}>Total</p>
				</div>
				<FieldArray
					name='items'
					render={(arrayHelpers) => (
						<>
							{values.items.map((item: any, index: number) => (
								<SingleItem
									formik={props.formik}
									index={index}
									key={index}
									onClick={() => arrayHelpers.remove(index)}
								/>
							))}
							<AddNewItemBtn
								addNew={() =>{
									arrayHelpers.push({
										name: '',
										quantity: 0,
										price: 0,
										total: 0,
									})}
								}
							/>
						</>
					)}
				/>
			</div>
		);
}
