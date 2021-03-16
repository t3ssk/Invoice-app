import React from 'react';
import { Route, Switch } from 'react-router';
import styles from './App.module.scss';
import { Invoices } from './Components/Invoices/Invoices';
import { Layout } from './Components/Layout';
import { SingleInvoice } from './Components/SingleInvoice/SingleInvoice';




function App() {
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
    </Layout>
		</div>
	);
}

export default App;
