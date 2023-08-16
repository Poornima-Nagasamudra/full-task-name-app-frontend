import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { startGetPerson } from './action/personAction';

const store = configureStore()

store.subscribe(function(){
  console.log('updated', store.getState())
})
 
store.dispatch(startGetPerson())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       <App />
    </Provider>
);


