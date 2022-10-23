import React from "react";
import{useState, useEffect} from 'react';
import Arrow from '../Images/Arrow.svg';
import settings from '../Images/Settings.svg';
import account from '../Images/user.png';
import task from '../Images/sleep.svg';
import keep from '../Images/fire.svg';
import fire from '../Images/keep.svg';
import sleep from '../Images/task.svg';
import{useParams, Link, useNavigate} from 'react-router-dom';
import '../Styles/footer.css';

const  Navbar = (props) =>{
    const menuCont = document.querySelectorAll('.imgTask');
    const menuparent = document.querySelector('.menu');
    
    function Change(el){
      // Берем наш элемент, и делаем с ним что хотим (меняю цвет на красный)
      el.classList.add("red");
    }


    return(
       <div className="footer">
        <div className="menu">
          <ul>
            <li onclick="Change(this)"><Link to='/taskManager'><img className="imgTask" src={task} alt="" srcset="" /></Link></li>
            <li onclick="Change(this)"><Link to='/keeps'><img className="imgTask" src={keep} alt="" srcset="" /></Link></li>
            <li onclick="Change(this)"> <Link to='/firetask'><img className="imgTask" src={fire} alt="" srcset="" /></Link></li>
            <li onclick="Change(this)"> <Link to='/sleeptask'><img className="imgTask" src={sleep} alt="" srcset="" /></Link></li>
          </ul>
        </div>
       </div>
    )
}
export default Navbar;