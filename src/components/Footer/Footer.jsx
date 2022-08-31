import style from './Footer.module.css';
import {FaHeart} from "react-icons/fa";


const Footer = () => {
    return ( 
        <div className={style.footer}>
            <p>2022, made with<FaHeart style={{margin:'0 10px'}}/> by<strong style={{margin:'0 10px'}}>Creative Tim</strong> for a better web.</p>
            <div className={style.about}>
                <a href='https://www.creative-tim.com/?_ga=2.216828511.838997642.1661342686-1191655115.1655147200'>Creative Tim</a>
                <a href='https://www.creative-tim.com/presentation?_ga=2.240748874.838997642.1661342686-1191655115.1655147200'>About Us</a>
                <a href='https://www.creative-tim.com/blog?_ga=2.145589757.838997642.1661342686-1191655115.1655147200'>Blog</a>
                <a href='https://www.creative-tim.com/license?_ga=2.111821133.838997642.1661342686-1191655115.1655147200'>License</a>
            </div>
        </div>
    );
}

export default Footer;