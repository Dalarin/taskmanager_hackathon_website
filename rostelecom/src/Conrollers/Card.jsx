import React from "react";
import{useState, useEffect} from 'react';
import Arrow from '../Images/Arrow.svg';
import settings from '../Images/Settings.svg';
import account from '../Images/user.png';
import Modal from "../Components/Modal";
import{useParams, Link, useNavigate} from 'react-router-dom';
import '../Styles/cardCat.css';

const  Card = (props) =>{
    return(
      <div>
      <button className="taskCard">
            <p className="name">{props.name}</p>
            <div className="progress">
            </div>
       </button>
       </div>
    )
}
export default Card;