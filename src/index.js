import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './reducer/index';

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
reportWebVitals();
