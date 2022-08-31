import { useRef } from "react";
import style from "./signin.module.css"
import { Link } from "react-router-dom";
import {FaFacebookSquare,FaGithub,FaGoogle} from "react-icons/fa";

const styleIcon = {color:'#fff',margin:'2rem 1rem',fontSize:'18px'}
const Signin = () => {
    const emailInputRef = useRef(null) 
    const passInputRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`your email is: ${emailInputRef.current.value}`)
    }
    return (
        <div className={style.signin}>
            <header className={style.header}>
                <h3>Sign in</h3>
                <div className = {style.logos}>
                    <Link to="https://facebook.com"><FaFacebookSquare style={styleIcon}/></Link>
                    <Link to="https://github.com"><FaGithub style={styleIcon}/></Link>
                    <Link to="https://google.com"><FaGoogle style={styleIcon}/></Link>
                </div>
            </header>
            <form onSubmit={handleSubmit} className={style.form}>
                <input 
                type="email"
                ref = {emailInputRef}
                placeholder="Email"
                className={style.email}/>
                <input 
                type="password"
                ref={passInputRef} 
                placeholder = "Password"
                className = {style.password}/>
                <div className={style.check}>
                    <input type="checkbox" id="toggle"/>
                    <label htmlFor="toggle">Remember me</label>
                </div>
                <button className={style.btn}>SIGN IN</button>
                <div className={style.question}>
                    <p>
                        Don't have an account?<a href="/sign-up">Sign Up</a>
                    </p>
                </div>
            </form>
        </div> 
        
     );
}
 
export default Signin;