import React from 'react'
import { CalendarPicker, DropDownChoice } from '../../UI/Inputs/Inputs';
import styles from './AdditionalInfo.module.scss';

interface AdditionalInfoProps {
    formik?: any
}
export const AdditionalInfo:React.FC<AdditionalInfoProps> = (props) => {
    return (
			<div className={styles.Additional__Info}>
				<div className={styles.Dropdown_Input}>
					<CalendarPicker name='paymentDue' formik={props.formik} />
				</div>
				<div className={styles.Dropdown_Input}><DropDownChoice name='paymentTerms' formik={props.formik} /></div>
			</div>
		);
}
