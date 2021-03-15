import React from 'react';
import styles from './App.module.scss';
import { Invoices } from './Components/Invoices/Invoices';
import { Layout } from './Components/Layout';
import { ButtonTypeFive } from './Components/UI/Buttons/Buttons';




function App() {
  return (
		<div className={styles.App}>
    <Layout>
      <Invoices/>
    </Layout>
		</div>
	);
}

export default App;
