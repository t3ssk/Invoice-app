import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import { darkmodeReducer } from './store/reducers/darkmodeReducer';

const rootReducer = combineReducers({
  darkmode: darkmodeReducer
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

