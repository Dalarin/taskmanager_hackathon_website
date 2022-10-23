import React from "react";
import{useState, useEffect} from 'react';
import Arrow from '../Images/Arrow.svg';
import settings from '../Images/Settings.svg';
import account from '../Images/user.png';
import task from '../Images/sleep.svg';
import keep from '../Images/fire.svg';
import fire from '../Images/keep.svg';
import sleep from '../Images/task.svg';
import '../Styles/footer.css';
import '../Styles/keeps.css';
import Notions from '../Conrollers/Notions.jsx';

const  Keeps = () =>{
    return(
      <div className="keeps">
        <div className="keep">
        <Notions title="Главная заадача" desc = "Очень краткое описание" />
        </div>
        <Notions title="Запушить на гитхаб" desc = "github.com/Dalarin/taskmanager" />
        <Notions title="Мобилка" desc = "Тест мобилки" />
        <Notions title="Сайт" desc = "Тест веб-приложения" />
       
      </div>
    )
}
export default Keeps;