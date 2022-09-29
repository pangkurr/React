//패키지 설치
//npm install --save redux
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import '../index.css';
import App from './App';
import {legacy_createStore} from 'redux';
import reducers from './reducers';

const store = legacy_createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root'));

const listener = ()=>{
  root.render(<App store={store}/>);
};

store.subscribe(listener);
listener();