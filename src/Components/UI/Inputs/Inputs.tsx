import React from 'react'
import { useSelector } from 'react-redux';
import { getIn } from 'formik';
import moment from 'moment'
import { state } from '../../../index';
import styles from './Inputs.module.scss'
import arrow from '../../../assets/icon-arrow-down.svg';
import calendar from '../../../assets/icon-calendar.svg';
import Calendar from 'react-calendar';
import './Calendar.scss';

interface inputProps {
	name: string;
	children?: string;
	value?: string | number | null;
	id?: string;
	onChange?: (event: any) => void | any;
	type?: 'text' | 'email' | undefined | 'number';
	getPrice?:any
	invalid?: boolean;
	formik: any;
	readOnly?: boolean;
}


export const TextInput: React.FC<inputProps> = (props) => {
	const darkmode = useSelector((state: state) => state.darkmode);
	const change = (event: any) => {
		if (props.getPrice) {
			props.getPrice(event);
		}

		props.formik.handleChange(event);
	};
	const error = getIn(props.formik.errors, props.name);
	const touched = getIn(props.formik.touched, props.name);
	const value = getIn(props.formik.values, props.name);

	return (
		<>
			<label
				htmlFor={props.name}
				className={`${styles.Label} ${darkmode && styles.Label_dark}`}>
				{props.children}
			</label>

			<input
				readOnly={props.readOnly}
				name={props.name}
				type={props.type}
				value={props.value || value}
				id={props.name}
				min='0'
				className={`${styles.Input}  ${darkmode && styles.Input_dark} ${
					error !== undefined && touched && styles.invalid
				}`}
				onChange={change}
				onBlur={props.formik.handleBlur}
			/>
			{error !== undefined && touched ? (
				<div className={styles.error}>{error}</div>
			) : null}
		</>
	);
};

export const DropDownChoice: React.FC<inputProps> = (props) => {
	const { setFieldValue } = props.formik;
	const darkmode = useSelector((state: state) => state.darkmode);
	const [showOpts, setShowOpts] = React.useState(false);

	return (
		<>
			<label
				htmlFor={props.name}
				className={`${styles.Label} ${darkmode && styles.Label_dark}`}>
				Payment Terms
			</label>
			<div className={styles.ddInput}>
				<input
					readOnly
					name={props.name}
					id={props.name}
					className={`${styles.Input} ${darkmode && styles.Input_dark} ${
						!darkmode && showOpts && styles.Active
					}`}
					value={props.formik.values.paymentTerms}
					onClick={() => {
						setShowOpts(true);
					}}
				/>
				<span
					className={styles.Dropdown}
					onClick={() => {
						setShowOpts((prev) => !prev);
					}}>
					<img
						src={arrow}
						alt=''
						className={showOpts ? styles.Up : undefined}
					/>
				</span>
			</div>
			<div
				className={`${styles.opts} ${!showOpts && styles.Hide} ${
					darkmode && styles.opts_dark
				}`}>
				<p
					onClick={() => {
						setFieldValue(props.name, 'Net 1 Day');
						setShowOpts(false);
					}}>
					Net 1 Day
				</p>
				<p
					onClick={() => {
						setFieldValue(props.name, 'Net 7 Day');
						setShowOpts(false);
					}}>
					Net 7 Days
				</p>
				<p
					onClick={() => {
						setFieldValue(props.name, 'Net 14 Days');
						setShowOpts(false);
					}}>
					Net 14 Days
				</p>
				<p
					onClick={() => {
						setFieldValue(props.name, 'Net 30 Days');
						setShowOpts(false);
					}}>
					Net 30 Days
				</p>
			</div>
		</>
	);
};



export const CalendarPicker: React.FC<inputProps> = (props) => {
	const darkmode = useSelector((state: state) => state.darkmode);
	const { setFieldValue } = props.formik;
	const [val] = React.useState(new Date());
	const [showCal, setShowCal] = React.useState(false);

	const onChange = (val: any) => {
		const date = moment(new Date(val)).format('YYYY-MM-DD');
		setFieldValue(props.name, date);
		setShowCal(false);
	};
	return (
		<>
			<label
				htmlFor={props.name}
				className={`${styles.Label} ${darkmode && styles.Label_dark}`}>
				Issue Date
			</label>
			<div className={styles.ddInput}>
				<input
					readOnly
					name={props.name}
					id={props.name}
					className={`${styles.Input} ${darkmode && styles.Input_dark} ${
						!darkmode && showCal && styles.Active
					}  ${
						props.formik.errors[props.name] !== undefined &&
						props.formik.touched[props.name] &&
						styles.invalid
					}`}
					value={props.formik.values.paymentDue}
					onClick={() => {
						setShowCal(true);
					}}
				/>
				<span
					className={styles.Dropdown}
					onClick={() => {
						setShowCal((prev) => !prev);
					}}>
					<img src={calendar} alt='' />
				</span>
			</div>
			{props.formik.errors[props.name] && props.formik.touched[props.name] ? (
				<div className={styles.errorDate}>
					{props.formik.errors[props.name]}
				</div>
			) : null}
			{showCal && (
				<div className={darkmode ? 'Darkmode' : undefined}>
					<Calendar onChange={onChange} value={val} />
				</div>
			)}
		</>
	);
};