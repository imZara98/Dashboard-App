import { useRef,useEffect } from 'react';
import useInput from '../../hooks/useInput';
import Checkbox from '../../components/checkbox/Checkbox';
import style from './signup.module.css';
import { FaUserAlt,FaKey,FaUserCircle,FaCircleNotch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const inputRef = useRef(null)
    const username = useInput("text", "")
    const email = useInput("email", "")
    const password = useInput("password", "")
    useEffect(() =>{
        inputRef.current.focus()
    },[inputRef])
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`your name is: ${username.value},
        and your email is: ${email.value}`)
    }
    return ( 
        <div className={style.signUp}>
           <div className={style.header}>
               <div className={style.headerDetail}>
                <h3>Material Dashboard 2</h3>
                <div className={style.headerLink}>
                    <div className={style.detailItem}>
                        <FaCircleNotch/>
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div className={style.detailItem}>
                        <FaUserAlt/>
                        <Link to="/profile">Profile</Link>
                    </div>
                    <div className={style.detailItem}>
                        <FaUserCircle />
                        <Link to="/sign-up">Sign Up</Link>
                    </div>
                    <div className={style.detailItem}>
                        <FaKey />
                        <Link to="/sign-in">Sign In</Link>
                    </div>
                </div>
                <button className={style.headerBtn}>FREE DOWNLOAD</button>
               </div>
            </div>
               <form onSubmit={handleSubmit} className={style.form}>
                    <header className={style.headerForm}>
                        <h2>Join us today</h2>
                        <p>Enter your email and password to register</p>
                    </header>
                    <div className={style.inputs}>
                        <input  className={style.input} type={username.type} value={username.value} onChange={username.onChange} placeholder='Name' ref={inputRef} />
                        <input className={style.input} type={email.type} value={email.value} onChange={email.onChange} placeholder='Email' />
                        <input className={style.input} type={password.type} value={password.value} onChange={password.onChange} placeholder='Password'/>
                    </div>
                    <div>
                        <Checkbox/>
                    </div>
                    <button className={style.btn} type='submit'>SIGN UP</button>
                </form>
        </div>
    );
}
export default SignUp;