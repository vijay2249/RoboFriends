import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { searchRobots } from './reducers';

const store = createStore(searchRobots)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));