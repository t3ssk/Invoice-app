import React from 'react'
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { state } from '../../../index';
import styles from './Buttons.module.scss'
import plus from '../../../assets/icon-plus.svg'

interface ButtonType {
	children?: string;
	onClick?: any;
	type?: 'button' | 'submit' | 'reset' | undefined;
	addNew?: ()=>void
}


export const InvoiceButton:React.FC<ButtonType> = (props) => {
	const isMobile = useMediaQuery({ query: '(max-width: 450px)' });

    return (
			<button className={styles.InvoiceButton} onClick={props.onClick}>
				<span>
					<img src={plus} alt='' />
				</span>{' '}
				<span>New{!isMobile && ' Invoice'}</span>
			</button>
		);
}

export const ButtonTypeTwo: React.FC<ButtonType> = (props) => {
	return (
		<button
			id='btn2'
			type={props.type}
			className={styles.ButtonT2}
			onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export const ButtonTypeThree: React.FC<ButtonType> = (props) => {
	const darkmode = useSelector((state: state) => state.darkmode);
	return (
		<button
			className={!darkmode ? styles.ButtonT3Dark : styles.ButtonT3Light}
			onClick={props.onClick}
			type={props.type}>
			{props.children}
		</button>
	);
};

export const ButtonTypeFour: React.FC<ButtonType> = (props) => {
	const darkmode = useSelector((state: state) => state.darkmode);
	return (
		<button
			id='btn4'
			type={props.type}
			className={darkmode ? styles.ButtonT4Dark : styles.ButtonT4Light}
			onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export const ButtonTypeFive: React.FC<ButtonType> = (props) => {
	return (
		<button className={styles.ButtonT5} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export const AddNewItemBtn: React.FC<ButtonType> = (props) => {
	return (
		<button className={styles.AddNewBtn} onClick={props.addNew} type='button'>
			+ Add New Item
		</button>
	);
};