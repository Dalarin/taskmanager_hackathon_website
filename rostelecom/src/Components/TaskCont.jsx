import React from "react";
import{useState, useEffect} from 'react';
import Arrow from '../Images/Arrow.svg';
import settings from '../Images/Settings.svg';
import account from '../Images/user.png';
import CardCat from "../Conrollers/Card";
import CardTask from "../Conrollers/CardTask";
import Modal from "../Components/Modal";
import vector from '../Images/Vector.svg';
import '../Styles/taskCont.css';
import{useParams, Link, useNavigate} from 'react-router-dom';
import '../Styles/navbar.css';


const  TaskCont = (props) =>{
    const [modalActive, setModalActive] = useState(false);
    return(
       <div className="taskCont">

        <div className="blockMain">
        <div className="spisok">
          <h3 className="head">Списки задач</h3>
          <br />
          <CardCat className="carcat" name="Все задачи"/>
          <br />
          <CardCat className="carcat" name="Разработка"/>
        </div>
        <div className="allTask">
          <h3 className="head">Все задачи</h3>
          <CardTask name="Разработка модели" tags ="#Разработка" desc="Мы займемся проектированием ER-диаграммы или диаграммы «сущность-связь», разберем разные типы связей и визуализируем их на примере."/>
          <CardTask name="Создание приложения" tags ="#Разработка" desc="Разработка мобильного приложения на Flutter"/>
          <CardTask name="RestAPI" tags ="#Разработка" desc = "Разработка Веб-решения по отправке запросов"/>
          <CardTask name="Презентация" tags ="#Разработка" desc="Сделать красиво"/>
        </div>
        </div>

        <button className="modal-button" onClick={()=>setModalActive(true)}><p> Добавить</p>
        </button>
        <Modal active={modalActive} setActive={setModalActive}>
          <div className="content">
        <img className="vector" src={vector} alt="" srcset="" />
        <div className="form">
        <form>
        <h4 className='hed'>Добавление задачи</h4>
            <label for='name' className='label'>Название</label>
            <br></br>
            <input type={"text"} placeholder='Название' id='name' className='inputForm'></input>
            <br></br>
            <label for='text' className='label'>Описание</label>
            <br></br>
            <input type={"email"} placeholder='Описание' id='mail' className='inputForm'></input>
            <br></br>
            <div className="date">
              <div className="start">
              <label for='text' className='label'>Начало</label>
              <br />
              <input type="date" id="start" className="inputForm" name="trip-start"
       value="2022-10-23"
       min="2022-10-23" max="2023-12-31"/>
              </div>
              <div className="end">
              <label for='text' className='label'>Конец</label>
              <br />
              <input type="date" id="start" className="inputForm" name="trip-start"
       value="2022-10-23"
       min="2022-10-23" max="2023-12-31"/>

              </div>
              </div>
              <div className="categ">
              <label for="cars">Категория</label>
              <br />
              <select id="cars">
                <option value="volvo">Работа</option>
                <option value="saab">Обучение</option>
                <option value="opel">Уник</option>
                <option value="audi">Прогрроммирование</option>
              </select>
              </div>
            
        <button type='button' className='add'><p>Добавить</p></button>
        </form>
        </div>
        </div>
        </Modal>
       </div>
    )
}
export default TaskCont;