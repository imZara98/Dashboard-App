import { useState } from "react";
import classes from './checkbox.module.css'

const Checkbox = () => {
    const [checked, setChecked] = useState(false)
    const handleChange = (e) => {
        setChecked(!checked)
    }
    return (
        <form className={classes.form}>
            <input type="checkbox" onChange={handleChange} id="question"/>
            <label htmlFor="question">I agree the <a href="/">Terms and Conditions</a></label>
        </form>
     );
}
 
export default Checkbox;