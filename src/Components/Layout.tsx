import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { state } from './../index';
import styles from './Layout.module.scss'
import { Navbar } from './Navbar/Navbar'
import actionTypes from '../store/actions';

interface LayoutProps {
	children: React.ReactNode;
}
export const Layout = (props:LayoutProps) => {
    const darkmode = useSelector((state: state) => state.darkmode);
	const invoices = useSelector((state: state) => state.invoice);
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchedData = localStorage.getItem('data')
		if(fetchedData){
			dispatch({type: actionTypes.INVOICE_FETCH_DATA, data: JSON.parse(fetchedData)})
		} 
		else {localStorage.setItem('data', JSON.stringify(invoices))}
	}, [])


    return (
			<div className={darkmode ? styles.Layout_Darkmode : styles.Layout_Normal}>
				<Navbar />
				<main className={styles.Main}>
				{props.children}
				</main>
			</div>
		);
}
