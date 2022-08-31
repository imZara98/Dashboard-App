import './navBar.css';
import { FaUserCircle,FaCog,FaBell} from "react-icons/fa";
import {BiHome} from "react-icons/bi";
import React,{useState} from 'react';

const NavBar = () => {
    const[navbar,setNavbar] = useState(false);
    const changeBackground = () => {
       if(window.scrollY >= 80){
           setNavbar(true)
       }else{
           setNavbar(false)
       }
    }
    window.addEventListener('scroll', changeBackground);
    return(
        <header className={navbar ? 'navbar active' : 'navbar'}>
            <div>
                <span className='navbarHeader'>
                    <BiHome  className='homeIcon'/>
                    <p>/Dashboard</p>                 
                </span>
                <h3>Dashboard</h3>
            </div>
            <div>
                <input className= 'navInput' type="search" placeholder="search here" dir="ltr" />
                <FaUserCircle className= 'stIcon' />
                <FaCog className='stIcon' />
                <FaBell className='stIcon' />    
            </div>
        </header>
    )
}
export default NavBar;