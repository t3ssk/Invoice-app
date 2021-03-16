import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase/app'
import 'firebase/database'
import { state } from './../index';
import styles from './Layout.module.scss'
import { Navbar } from './Navbar/Navbar'
import actionTypes from '../store/actions';

interface LayoutProps {
	children: React.ReactNode;
}
export const Layout = (props:LayoutProps) => {
    const darkmode = useSelector((state: state) => state.darkmode);
	const dispatch = useDispatch()

	useEffect(() => {
		const database = firebase.database()
		const invoicesRef = database.ref('/invoiceData/')
		invoicesRef.on('value', (snapshot)=>{
			const data = snapshot.val()
			dispatch({type: actionTypes.INVOICE_FETCH_DATA, data})
		})

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
