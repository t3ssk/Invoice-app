import React, {useState, useEffect} from 'react'
import { TextInput } from '../../UI/Inputs/Inputs'
import styles from './ItemList.module.scss'
interface SingleItemProps {
	formik?: any;
	index: number;
	onClick: (arg0: any) => void;
	error?: string | string[] | undefined
}
export const SingleItem:React.FC<SingleItemProps> = (props) => {
	const [price, setPrice] = useState<null|number>(null)
	const [qty, setQty] = useState<null | number>(null);
	const [total, setTotal] = useState<null | number>(null);
	const { setFieldValue } = props.formik;

	useEffect(() => {
		if (qty !== null && price !== null) {
			const newTotal = price * qty;
			setTotal(newTotal);
			setFieldValue(`items[${props.index}].total`, newTotal);
		}
		
		
	}, [price, qty, props.index, setFieldValue]);

		const getPrice = (e: Event) => {
			const target = e.target as HTMLInputElement;
			if (target.id === `items[${props.index}].quantity`) {
				setPrice(Number(target.value));
			}
			if (target.id === `items[${props.index}].price`) {
				setQty(Number(target.value));
			}
		};
    return (
			<>
				<div
					className={`${styles.Item_Line}`}>
					<div className={styles.Input_name}>
						<TextInput
							formik={props.formik}
							name={`items[${props.index}].name`}></TextInput>
					</div>
					<div className={styles.Input_qty}>
						<TextInput
							type='number'
							formik={props.formik}
							name={`items[${props.index}].quantity`}
							getPrice={getPrice}></TextInput>
					</div>
					<div className={styles.Input_price}>
						<TextInput
							type='number'
							formik={props.formik}
							name={`items[${props.index}].price`}
							getPrice={getPrice}></TextInput>
					</div>
					<div className={styles.Input_total}>
						<p>${total}</p>
					</div>
					<div className={styles.Trashcan} onClick={props.onClick}></div>
				</div>
				
			</>
		);
}
