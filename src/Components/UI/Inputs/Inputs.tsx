import React from 'react'
import { useSelector } from 'react-redux';
import { state } from '../../../index';
import styles from './Inputs.module.scss'
import arrow from '../../../assets/icon-arrow-down.svg';
import calendar from '../../../assets/icon-calendar.svg';
import Calendar from 'react-calendar';
import './Calendar.scss';

interface inputProps {
	name: string;
	children?: string;
	value?: string;
	id?: string;
	width?: string;
	padding?: string;
	onChange?: (event:any)=>void
	type: 'text'  | 'email'
	invalid?: boolean 
	formik: any
}


export const TextInput = (props:inputProps) => {
	const darkmode = useSelector((state: state) => state.darkmode);
    return (
			<>
				<label
					htmlFor={props.name}
					className={`${styles.Label} ${darkmode && styles.Label_dark}`}>
					{props.children}
				</label>

				<input
					name={props.name}
					type={props.type}
					value={props.value}
					id={props.name}
					className={`${styles.Input}  ${darkmode && styles.Input_dark} ${
						props.formik.touched.clientsEmail &&
						props.formik.errors.clientsEmail !== undefined &&
						styles.invalid
					}`}
					style={{ width: props.width, padding: props.padding }}
					onChange={props.onChange}
				/>
				{props.formik.touched[props.name] &&
				props.formik.errors[props.name] ? (
					<div className={styles.error}>{props.formik.errors[props.name]}</div>
				) : null}
			</>
		);
}

export const DropDownChoice = (props: inputProps) => {
    const [val, setVal] = React.useState('30');
	const darkmode = useSelector((state: state) => state.darkmode);
    const [showOpts, setShowOpts] = React.useState(true)
    return (
			<>
				<label
					htmlFor="paymentTerms"
					className={`${styles.Label} ${
						darkmode && styles.Label_dark
					}`}>
					Payment Terms
				</label>
				<div className={styles.ddInput}>
					<input
						name={props.name}
						id="paymentTerms"
						className={`${styles.Input} ${
							darkmode && styles.Input_dark
						} ${!darkmode && showOpts && styles.Active}`}
						value={val}
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
							setVal('1');
							setShowOpts(false);
						}}>
						Net 1 Day
					</p>
					<p
						onClick={() => {
							setVal('7');
							setShowOpts(false);
						}}>
						Net 7 Days
					</p>
					<p
						onClick={() => {
							setVal('14');
							setShowOpts(false);
						}}>
						Net 14 Days
					</p>
					<p
						onClick={() => {
							setVal('30');
							setShowOpts(false);
						}}>
						Net 30 Days
					</p>
				</div>
			</>
		);
}



export const CalendarPicker = (props:inputProps) => {
	const darkmode = useSelector((state: state) => state.darkmode);
    const [val, setVal] = React.useState(new Date())
    const [showCal, setShowCal] = React.useState(false)
	

    const onChange = (val:any) => {
        setVal(val)
    }
    return (
			<>
				<label
					htmlFor='Calendar'
					className={`${styles.Label} ${darkmode && styles.Label_dark}`}>
					Issue Date
				</label>
				<div className={styles.ddInput}>
					<input
						name={props.name}
						id='Calendar'
						className={`${styles.Input} ${darkmode && styles.Input_dark} ${
							!darkmode && showCal && styles.Active
						}`}
						value={val.toDateString()}
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

				{showCal && (
					<div className={darkmode ? 'Darkmode' : undefined}>
						<Calendar onChange={onChange} value={val} />
					</div>
				)}
			</>
		);
}