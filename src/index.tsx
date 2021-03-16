import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import firebase from 'firebase/app';
import './index.css';
import App from './App';
import { darkmodeReducer } from './store/reducers/darkmodeReducer';
import { InvoiceReducer, InvoiceState } from './store/reducers/InvoiceReducer';
import { filterReducer, filterTerms } from './store/reducers/filterReducer';

export interface state {
	darkmode?: boolean;
	invoice?: [] | InvoiceState[];
	filterTerm?: [] | filterTerms[];
}

const rootReducer = combineReducers({
  darkmode: darkmodeReducer,
  invoice: InvoiceReducer,
  filterTerm: filterReducer
})
const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(config);

const store = createStore(
  rootReducer,  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__())));

ReactDOM.render(
<Provider store={store}>
  <Router>
     <App />
  </Router>  
</Provider>,document.getElementById('root')
);

