import React from 'react'
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
		console.log(target.id)
		if(openDrawer.NewInvoice){
		if (target.id === 'btn4') {
			setFieldValue('status', 'draft');
			props.formik.handleSubmit();
		}
		if (target.id === 'btn2') {
			setFieldValue('status', 'pending');
			props.formik.handleSubmit();
		}
		}
		if(openDrawer.EditInvoice){
			
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
