//패키지 설치
//npm install --save react-redux
//예제 01의 [actions], [reducers] 디렉터리를 붙여넣는다.
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import '../index.css';
import App from './App';
import {legacy_createStore} from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = legacy_createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root'));

const listener = ()=>{
  root.render(
    <Provider store={store}>
      <App indexProp="react"/>
    </Provider>
  );
};

store.subscribe(listener);
listener();