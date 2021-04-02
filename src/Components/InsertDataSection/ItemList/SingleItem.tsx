import React, {useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive';
import { TextInput } from '../../UI/Inputs/Inputs'
import { useFormikContext} from 'formik'
import styles from './ItemList.module.scss'


interface SingleItemProps {
	formik?: any;
	index: number;
	onClick: (arg0: any) => void;
	error?: string | string[] | undefined
}
export const SingleItem:React.FC<SingleItemProps> = (props) => {
	const isMobile = useMediaQuery({ query: '(max-width: 420px)' });
	const [total, setTotal] = useState<null | number>(null);
	const { values } = useFormikContext<any>();

	const { setFieldValue } = props.formik;

	useEffect(() => {
		const newTotal =
			values.items[props.index].price * values.items[props.index].quantity;
		setTotal(newTotal);
		setFieldValue(`items[${props.index}].total`, newTotal);
	}, [values.items[props.index].price, values.items[props.index].quantity]);


    return (
			<>
				<div className={`${styles.Item_Line}`}>
					<div className={styles.Input_name}>
						<TextInput
							formik={props.formik}
							name={`items[${props.index}].name`}>
							{isMobile ? 'Name' : undefined}
						</TextInput>
					</div>
					<div className={styles.Input_qty}>
						<TextInput
							type='number'
							formik={props.formik}
							name={`items[${props.index}].quantity`}>
							{isMobile ? 'Qty' : undefined}
						</TextInput>
					</div>
					<div className={styles.Input_price}>
						<TextInput
							type='number'
							formik={props.formik}
							name={`items[${props.index}].price`}>
							{isMobile ? 'Price' : undefined}
						</TextInput>
					</div>
					<div className={styles.Input_total}>
						{isMobile ? <label>Total</label> : undefined}
						<p>${total}</p>
					</div>
					<div className={styles.Trashcan} onClick={props.onClick}></div>
				</div>
			</>
		);
}
