import React from "react";
import{useState, useEffect} from 'react';
import Arrow from '../Images/Arrow.svg';
import settings from '../Images/Settings.svg';
import account from '../Images/user.png';
import{useParams, Link, useNavigate} from 'react-router-dom';
import '../Styles/navbar.css';

const  Navbar = (props) =>{
    const {id} = useParams();
    const navigate = useNavigate();
    const goBack =() => navigate(-1);
    return(
        <div className="navbar">
            <button className="arrow" onClick={goBack}><img src={Arrow} alt="" srcset="" /></button>
            <h1 className="head">{props.head}</h1>
            <div className="end">
            <Link to = '/account'><img className="account" src={account} alt="Аккаунт" srcset="" /></Link>
            <Link to = '/settings'><img className="settings" src={settings} alt="Настройки" srcset="" /></Link>
            </div>
        </div>
    )
}
export default Navbar;