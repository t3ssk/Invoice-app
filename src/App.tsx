import React from 'react';
import { Route, Switch } from 'react-router';
import { Helmet } from 'react-helmet';
import {useSelector} from 'react-redux'
import styles from './App.module.scss';
import { InsertDataLayout } from './Components/InsertDataSection/InsertDataLayout';
import { Invoices } from './Components/Invoices/Invoices';
import { Layout } from './Components/Layout';
import { SingleInvoice } from './Components/SingleInvoice/SingleInvoice';
import { state } from '.';




function App() {
  const openDrawer = useSelector((state:state) => state.openDrawer!)
  return (
		<div className={styles.App}>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Invoice management app</title>
				<meta name='title' content='Invoice management app' />
				<meta
					name='description'
					content='Invoice managing app snippet. Keep track of your invoices. Design made by http://frontendmentor.io, code written by Tereza Konečná'
				/>
				<meta name='author' content='Tereza Konečná' />
				<meta name='author' content='http://konecinternetu.cz' />
        <link rel="icon" 
      type="image/png" 
      href="./assets/favicon-32x32.png"></link>
			</Helmet>
			<Layout>
				<Switch>
					<Route path='/' exact>
						<Invoices />
					</Route>
					<Route path='/invoice/:invoiceid'>
						<SingleInvoice />
					</Route>
				</Switch>
				{openDrawer.EditInvoice || openDrawer.NewInvoice ? (
					<InsertDataLayout />
				) : null}
			</Layout>
		</div>
	);
}

export default App;
