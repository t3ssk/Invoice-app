import React from 'react'
import { nanoid } from 'nanoid';
import moment from 'moment';
import { FormikProps } from 'formik';
import {useDispatch, useSelector} from 'react-redux'
import { state } from '../../..'
import actionTypes from '../../../store/actions'
import { initVals } from '../InsertDataLayout';
import { ButtonTypeFour, ButtonTypeThree, ButtonTypeTwo } from '../../UI/Buttons/Buttons'
import styles from './ButtonSection.module.scss'

interface buttonSectionProps {
	formik: FormikProps<initVals>;
}

export const ButtonSection:React.FC<buttonSectionProps> = (props) => { 
	const darkmode = useSelector((state: state) => state.darkmode);
	const openDrawer = useSelector((state: state) => state.openDrawer!);
	const dispatch = useDispatch();
	const { setFieldValue } = props.formik;

	const discardHandler = () => {
		dispatch({ type: actionTypes.CLOSE_DRAWER_ALL });
	};
	
	const clickHandler = (e: Event) => {
		const target = e.target as HTMLElement;
		const values= props.formik.values
		if(openDrawer.NewInvoice){
		if (target.id === 'btn4') {
			setFieldValue('status', 'draft');
				let calctotal = 0;
				values.items.forEach(
					(item: any) => (calctotal = calctotal + item.total)
				);

				const endVals = {
					...values,
					id: nanoid(6),
					createdAt: moment(Date.now()).format('YYYY-MM-DD'),
					paymentTerms: Number(values.paymentTerms.slice(4, 6)),
					total: calctotal,
				};
				dispatch({
					type: actionTypes.INVOICE_ADD_NEW_AS_PENDING,
					data: endVals,
				});
			props.formik.handleSubmit();
		}
		if (target.id === 'btn2') {
				let calctotal = 0;
				values.items.forEach(
					(item: any) => (calctotal = calctotal + item.total)
				);

				const endVals = {
					...values,
					id: nanoid(6),
					createdAt: moment(Date.now()).format('YYYY-MM-DD'),
					paymentTerms: Number(values.paymentTerms.slice(4, 6)),
					total: calctotal,
					status: 'pending'
				};
				if (endVals.items[endVals.items.length-1].total !== 0){
					dispatch({
						type: actionTypes.INVOICE_ADD_NEW_AS_PENDING,
						data: endVals,
					});
			props.formik.handleSubmit();} else {alert("Can't submit empty data, please either delete or add invoice item")}
		}
		}
		if(openDrawer.EditInvoice){
			if (values.items[values.items.length - 1].total !== 0) {
				dispatch({
					type: actionTypes.INVOICE_EDIT,
					id: openDrawer.InvoiceId,
					data: { ...values },
				});
				props.formik.handleSubmit();
			} else {
				alert(
					"Can't submit empty data, please either delete or add invoice item"
				);
			}
		}
	};

	return (
		<div>
			<div
				className={`${styles.Buttons__choice} ${
					openDrawer.EditInvoice ? styles.Edit : undefined
				} ${darkmode ? styles.Darkmode : undefined}`}>
				<ButtonTypeThree type="button" onClick={discardHandler}>
					{openDrawer.NewInvoice ? 'Discard' : 'Cancel'}
				</ButtonTypeThree>
				<div>
					{openDrawer.NewInvoice && (
						<ButtonTypeFour type='button' onClick={clickHandler}>
							Save as Draft
						</ButtonTypeFour>
					)}
					<ButtonTypeTwo type='button' onClick={clickHandler}>
						Save &amp; Send
					</ButtonTypeTwo>
				</div>
			</div>
		</div>
	);
};
