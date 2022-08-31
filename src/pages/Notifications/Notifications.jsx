import { FaTimes } from 'react-icons/fa'
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import NavBar from '../../components/NavBar/NavBar';
import classes from './notif.module.css'

const Notifications = () => {
    const handleClick = () => {

    }
    return(
        <div className={classes.allItem}>
            <div>
                <Menu/>
            </div>
            <div className={classes.feature}>
                <NavBar/>
                <div className={classes.alerts}>
                    <h3>Alerts</h3>
                    <div className={classes.itemOne}>
                        <p>A simple primary alert with <strong>an example link.</strong> Give it a click if you like.</p>
                        <span onClick={handleClick}> <FaTimes/> </span>
                    </div>
                    <div className={classes.itemTow}>
                        <p>A simple secondary alert with <strong>an example link.</strong> Give it a click if you like.</p>
                        <span onClick={handleClick}> <FaTimes/> </span>
                    </div>
                    <div className={classes.itemThree}>
                        <p>A simple success alert with <strong>an example link.</strong> Give it a click if you like.</p>
                        <span onClick={handleClick} > <FaTimes/> </span>
                    </div>
                    <div className={classes.itemFour}>
                        <p>A simple error alert with <strong>an example link.</strong> Give it a click if you like.</p>
                        <span> <FaTimes/> </span>
                    </div>
                    <div className={classes.itemFive}>
                        <p>A simple warning alert with <strong>an example link.</strong> Give it a click if you like.</p>
                        <span> <FaTimes/> </span>
                    </div>
                    <div className={classes.itemSix}>
                        <p>A simple info alert with <strong>an example link.</strong> Give it a click if you like.</p>
                        <span> <FaTimes/> </span>
                    </div>
                    <div className={classes.itemSeven}>
                        <p>A simple light alert with <strong>an example link.</strong> Give it a click if you like.</p>
                        <span> <FaTimes/> </span>
                    </div>
                    <div className={classes.itemEight}>
                        <p>A simple dark alert with <strong>an example link.</strong> Give it a click if you like.</p>
                        <span> <FaTimes/> </span>
                    </div>
                </div>
                <div className={classes.notif}>
                    <h3>Notifications</h3>
                    <p>Notifications on this page use Toasts from Bootstrap. Read more details here.</p>
                    <div className={classes.notifBtn}>
                        <button className = {classes.success}>SUCCESS NOTIFICATION</button>
                        <button className = {classes.info}>INFO NOTIFICATION</button>
                        <button className = {classes.warning}>WARNING NOTIFICATION</button>
                        <button className = {classes.error}>ERROR NOTIFICATION</button>
                    </div>          
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div> 
    )
}
export default Notifications;