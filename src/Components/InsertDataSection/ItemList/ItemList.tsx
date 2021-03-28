import React, {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'
import { AddNewItemBtn } from '../../UI/Buttons/Buttons'
import styles from './ItemList.module.scss'
import { SingleItem } from './SingleItem'

interface ItemListProps {
	formik: any;
	error?: undefined | string | string[]
}
export const ItemList:React.FC<ItemListProps> = (props) => {
    const [itemInputs, setItemInputs] = useState<any>([])
	const { setFieldValue } = props.formik;
	useEffect(() => {
		if (props.formik.values.items.length !== 0) {
			const inputs:any[] = []
			props.formik.values.items.forEach((item: any) =>
				inputs.push({
					id: nanoid(),
					item: (
						<SingleItem
							formik={props.formik}
							key={nanoid()}
							index={props.formik.values.items.length}
							onClick={handleRemove}
						/>
					),
				})
			);
			setItemInputs(inputs)
		}
	}, [])
    const handleClick = () => {
        setItemInputs([
					...itemInputs,
					{
						id: nanoid(),
						item: (
							<SingleItem
								formik={props.formik}
								key={nanoid()}
								index={itemInputs.length}
								onClick={handleRemove}
							/>
						),
					},
				]);
    }
    const handleRemove = (e: Event) => {
        const target = e.target as HTMLElement
        const items = [...itemInputs]
        const filtered = items.filter((item:any) => item.id !== target.id)
        setItemInputs(filtered)
		setFieldValue('items', filtered)
    }
    return (
			<div className={styles.Items_List}>
				<h2>Item List</h2>
				<div className={styles.Items_Naming}>
					<p className={styles.Name_name}>Item Name</p>
					<p className={styles.Name_qty}>Qty.</p>
					<p className={styles.Name_price}>Price</p>
					<p className={styles.Name_total}>Total</p>
				</div>
				{itemInputs.map((item:any)=>item.item)}
				<AddNewItemBtn addNew={handleClick}/>
				
			</div>
		);
}
