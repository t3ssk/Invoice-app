import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import { darkmodeReducer } from './store/reducers/darkmodeReducer';
import { InvoiceReducer, InvoiceState } from './store/reducers/InvoiceReducer';
import { filterReducer, filterTerms } from './store/reducers/filterReducer';
import { openDrawer, openDrawerReducer } from './store/reducers/openDrawerReducer';
import { modalReducer } from './store/reducers/modalReducer';

export interface state {
	darkmode?: boolean;
	invoice?: [] | InvoiceState[];
	filterTerm?: [] | filterTerms[];
  openDrawer?: openDrawer;
  showModal?: boolean
}

const rootReducer = combineReducers({
  darkmode: darkmodeReducer,
  invoice: InvoiceReducer,
  filterTerm: filterReducer,
  openDrawer: openDrawerReducer,
  showModal: modalReducer
})


const store = createStore(
  rootReducer,  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__())));

ReactDOM.render(
<Provider store={store}>
  <Router>
     <App />
  </Router>  
</Provider>,document.getElementById('root')
);

