import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './Pages/App';
import Register from './Pages/Register';
import Main from './Pages/Main';
import Auth from './Components/Auth';
import reportWebVitals from './reportWebVitals';
import Keep from './Pages/Keep';
import Account from './Pages/Account';
import Settings from './Pages/Settings';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
<Route  path='/' element={<App/>} />
<Route  path='/reg' element={<Register/>} />
<Route  path='/taskManager' element={<Main/>} />
<Route  path='/keeps' element={<Keep/>} />
<Route  path='/account' element={<Account/>} />
<Route  path='/settings' element={<Settings/>} />
</Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
