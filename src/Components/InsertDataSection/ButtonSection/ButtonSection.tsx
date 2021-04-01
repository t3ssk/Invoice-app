import React from 'react'
import { nanoid } from 'nanoid';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux'
import { state } from '../../..'
import actionTypes from '../../../store/actions'
import { ButtonTypeFour, ButtonTypeThree, ButtonTypeTwo } from '../../UI/Buttons/Buttons'
import styles from './ButtonSection.module.scss'

export const ButtonSection = (props: { formik: any }) => {
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
				dispatch({
					type: actionTypes.INVOICE_ADD_NEW_AS_PENDING,
					data: endVals,
				});
			props.formik.handleSubmit();
		}
		}
		if(openDrawer.EditInvoice){
			setFieldValue('status', 'pending');
			dispatch({type: actionTypes.INVOICE_EDIT, id: openDrawer.InvoiceId, data: {...values, status: 'pending'}})
			props.formik.handleSubmit();
		}
	};

	return (
		<div>
			<div
				className={`${styles.Buttons__choice} ${
					openDrawer.EditInvoice ? styles.Edit : undefined
				} ${darkmode ? styles.Darkmode : undefined}`}>
				<ButtonTypeThree onClick={() => discardHandler}>
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
