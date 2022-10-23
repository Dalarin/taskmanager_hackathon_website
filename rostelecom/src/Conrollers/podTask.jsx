import React from "react";
import{useState, useEffect} from 'react';
import Arrow from '../Images/Arrow.svg';
import settings from '../Images/Settings.svg';
import account from '../Images/user.png';
import CardCat from "../Conrollers/Card";
import Modal from "../Components/Modal";
import '../Styles/cardTask.css';
import{useParams, Link, useNavigate} from 'react-router-dom';
import '../Styles/podtask.css';

const  PodTask = (props) =>{
    return(
        <div className="podtask">
            <input type="checkbox" name="" id="" />
            <p>{props.title}</p>
       </div>
    )
}
export default PodTask;