import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {golfersReducer} from './reducers/index'
import App from './App';
// import rankings from './rankings.json'

// import registerServiceWorker from './registerServiceWorker';
const store = createStore(golfersReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk))
ReactDOM.render(
<Provider store = {store}>
{/* <App rankings={rankings}/> */}
<App />
</Provider>, document.getElementById('root'));
// registerServiceWorker();
