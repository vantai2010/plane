import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './store'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import OptionPlane from './component/OptionPlane.js'
import InputCus from './component/InputCus.js'
import Admin from './component/Admin.js';
import SelectPlane from './component/SelectPlane';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/chair' element={<OptionPlane />} />
          <Route path='/show' element={<InputCus />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/selectPlane' element={<SelectPlane />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
