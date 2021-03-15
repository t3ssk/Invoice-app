import React from 'react'
import { useSelector } from 'react-redux';
import { state } from './../index';
import styles from './Layout.module.scss'
import { Navbar } from './Navbar/Navbar'

interface LayoutProps {
	children: React.ReactNode;
}
export const Layout = (props:LayoutProps) => {
    const darkmode = useSelector((state: state) => state.darkmode);
    return (
			<div className={darkmode ? styles.Layout_Darkmode : styles.Layout_Normal}>
				<Navbar />
				<main className={styles.Main}>
				{props.children}
				</main>
			</div>
		);
}
