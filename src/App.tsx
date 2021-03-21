import React from 'react';
import { Route, Switch } from 'react-router';
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
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Invoices/>
        </Route>
        <Route path="/invoice/:invoiceid">
          <SingleInvoice/>
        </Route>
      </Switch>
      {openDrawer.EditInvoice || openDrawer.NewInvoice ? <InsertDataLayout/> : null}
    </Layout>
		</div>
	);
}

export default App;
