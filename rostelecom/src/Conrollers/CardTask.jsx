import React from "react";
import{useState, useEffect} from 'react';
import Arrow from '../Images/Arrow.svg';
import settings from '../Images/Settings.svg';
import account from '../Images/user.png';
import CardCat from "../Conrollers/Card";
import Modal from "../Components/Modal";
import '../Styles/cardTask.css'
import{useParams, Link, useNavigate} from 'react-router-dom';
import '../Styles/navbar.css';
import '../Styles/taskModal.css';
import PodTask from "./podTask.jsx";

const  CardTask = (props) =>{
    const [modalActive, setModalActive] = useState(false);
    return(
        <div>
       <button className="taskCard" onClick={()=>setModalActive(true)}>
            <p className="name">{props.name}</p>
            <p className="tags">{props.tags}</p>
       </button>
       <Modal active={modalActive} setActive={setModalActive}>
            <div>
                <h3 className="title">{props.name}</h3>
                <p className="desc">{props.desc} </p>
                <div>
                <h3 className="desc">Подзадачи</h3>
                <PodTask title="Подзадача" />
                </div>
                <h3 className="desc">Даты выполнения</h3>
                <div className="date">
              <div className="start">
              <label for='text' className='label'>Начало</label>
              <br />
              <input type={"email"} placeholder='21.10.2022' id='mail' className='inputForm'></input>
              </div>
              <div className="end">
              <label for='text' className='label'>Конец</label>
              <br />
              <input type={"email"} placeholder='23.10.2022' id='mail' className='inputForm'></input>
              </div>
              </div>
            </div>
            <div class="but">
    <button type="submit" class="ok">Принять</button>
    <button type="submit" class="del">Удалить</button>
    </div>
       </Modal>
       </div>
    )
}
export default CardTask;