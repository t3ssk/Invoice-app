import React from 'react'
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { state } from '../../../index';
import styles from './Buttons.module.scss'
import plus from '../../../assets/icon-plus.svg'

interface ButtonType {
	children: string;
}


export const InvoiceButton = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

    return (
        <button className={styles.InvoiceButton}><span><img src={plus} alt=""/></span> <span>New{!isMobile && " Invoice"}</span></button>
    )
}

export const ButtonTypeTwo = (props: ButtonType) => {
	return <button className={styles.ButtonT2}>{props.children}</button>;
};

export const ButtonTypeThree = (props:ButtonType) => {
	const darkmode = useSelector((state: state) => state.darkmode);
    return (
			<button className={!darkmode ? styles.ButtonT3Dark : styles.ButtonT3Light}>
				{props.children}
			</button>
		);
}

export const ButtonTypeFour = (props:ButtonType) => {
	const darkmode = useSelector((state: state) => state.darkmode);
    return (
			<button className={darkmode ? styles.ButtonT4Dark : styles.ButtonT4Light}>
				{props.children}
			</button>
		);
}

export const ButtonTypeFive= (props: ButtonType) => {
	return (
		<button
			className={styles.ButtonT5}>
			{props.children}
		</button>
	);
};

export const AddNewItemBtn = () => {
    return <button className={styles.AddNewBtn}> + Add New Item</button>
}