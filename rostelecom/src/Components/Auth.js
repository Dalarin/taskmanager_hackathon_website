import React, { Component } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import '../Styles/auth.css';
import '../index.css';

export default class Auth extends Component {
  render() {
    return (
        <div className='auth-content'>
        <div className='auth-form'>
        <form>
        <h4 className='hed'>Вход в аккаунт</h4>
            <label for='name' className='label'>ФИО</label>
            <br></br>
            <input type={"text"} placeholder='ФИО' id='name' className='inputForm'></input>
            <br></br>
            <label for='mail' className='label'>Телефон/Email</label>
            <br></br>
            <input type={"email"} placeholder='Почта' id='mail' className='inputForm'></input>
            <br></br>
            <label for='password' className='label'>Пароль</label>
            <br></br>
            <input type={"password"} placeholder='Пароль' id='password' className='inputForm'></input>
            
        </form>
        </div>
        <h3 className='reg'>Нет аккаунта? <Link  to="/reg" className='reglink'>Зарегистрироваться</Link> </h3>
        <Link to='/taskManager' className='butLink'> <button type='button' className='button-auth'>Вход</button></Link>
     </div>
     
    )
  }
}
