import classes from './profile.module.css';
import Menu from '../../components/Menu/Menu';
import NavBar from '../../components/NavBar/NavBar';
import muntain from './muntain.jpg';
import young from './young.png';
import { Link } from 'react-router-dom';
import { FaEnvelope,FaCog,FaPen } from "react-icons/fa";
import {BiHome} from "react-icons/bi";
import boyb from '../../components/Pictures/boyb.png';
import boy from '../../components/Pictures/boy.png';
import girl from '../../components/Pictures/girl.png';
import ggirl from '../../components/Pictures/ggirl.png';
import Footer from '../../components/Footer/Footer';

const Profile = () => {
    return ( 
        <div className={classes.allSection}>
            <div className={classes.menu}>
                <Menu />
            </div>
            <div className={classes.profile}>
                <div>
                    <NavBar/>
                </div>
                <div className={classes.background}>
                    <img src={muntain}  className={classes.mountain} alt='it is background'/>
                </div>
                <div className={classes.user}>
                    <div className={classes.userInformation}>
                        <img src={young} alt='he is richard' className= {classes.userImg} />
                        <div className={classes.userName}>
                            <h3>Richard Davis</h3>
                            <h4>CEO /Co-Founder</h4>
                        </div>
                        <div className={classes.option}>
                            <p>
                                <BiHome />
                                App
                            </p>
                            <p>
                                <FaEnvelope />
                                Message
                            </p>
                            <p>
                                <FaCog/>
                                Settings
                            </p>
                        </div>
                    </div>
                    <div className={classes.items}>
                        <div className={classes.profileItem}>
                            <div className={classes.profileDetail}>
                                <h3>Profile Information</h3>
                                <FaPen  className={classes.pen}/>
                            </div>
                            <p>
                            Hi, I’m Alec Thompson, Decisions: If you<br></br> can’t decide, the answer is no. If two<br></br> equally difficult paths, choose the one more<br></br> painful in the short term (pain avoidance is<br></br> creating an illusion of equality).
                            </p>
                            <div className={classes.item}>
                                <h3>Full Name:</h3>
                                <h4>Alec M. Thompson</h4>
                            </div>
                            <div className={classes.item}>
                                <h3>Mobile:</h3>
                                <h4>(44) 123 1234 123</h4>
                            </div>
                            <div className={classes.item}>
                                <h3>Email:</h3>
                                <h4>alecthompson@mail.com</h4>
                            </div>
                            <div className={classes.item}>
                                <h3>Location:</h3>
                                <h4>USA</h4>
                            </div>
                            <div className={classes.item}>
                                <h3>Social:</h3>
                                <h4>
                                  instagram  
                                </h4>
                            </div>
                        </div>
                        <div className={classes.conversations}>
                            <div className={classes.converHeader}>
                                <h3>Conversations</h3>
                            </div>
                            <div className={classes.converItems}>
                                <div>
                                    <div className={classes.person}>
                                        <img src = {boy} alt='he writes his opinion' className={classes.people}/>
                                        <div className={classes.opinion}>
                                            <h3>Sophie B.</h3>
                                            <h4>Hi! I need more<br></br> information..</h4>
                                        </div>
                                        <Link to="#" className={classes.link}>REPLY</Link>
                                    </div>
                                    <div className={classes.person}>
                                        <img src = {girl} alt='he writes his opinion' className={classes.people} />
                                        <div className={classes.opinion}>
                                            <h3>Anne Marie</h3>
                                            <h4>Awesome work, can <br></br>you.</h4>
                                        </div>
                                        <Link to="#" className={classes.link}>REPLY</Link>
                                    </div>
                                    <div className={classes.person}>
                                        <img src={boyb} alt='she writes her opinion' className={classes.people}/>
                                        <div className={classes.opinion}>
                                            <h3>Ivanna</h3>
                                            <h4>About files I can..</h4>
                                        </div>
                                        <Link to="#" className={classes.link}>REPLY</Link>
                                    </div>
                                    <div className={classes.person}>
                                        <img src = {ggirl} alt='she writes her opinion' className={classes.people}/>
                                        <div className={classes.opinion}>
                                            <h3>Peterson</h3>
                                            <h4>Have a great<br></br> afternoon..</h4>
                                        </div>
                                        <Link to="#" className={classes.link}>REPLY</Link>
                                    </div>
                                    <div className={classes.person}>
                                        <img src = {boyb} alt='he writes his opinion' className={classes.people}/>
                                        <div className={classes.opinion}>
                                            <h3>Nick Daniel</h3>
                                            <h4>Hi! I need more <br></br>information.</h4>
                                        </div>
                                        <Link to="#" className={classes.link}>REPLY</Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <footer className={classes.footer}>
                        <Footer />
                </footer>
            </div>
        </div>
     );
}
 
export default Profile;