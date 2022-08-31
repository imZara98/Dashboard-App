import './menu.css';
import {FaBell,FaScroll,FaSignInAlt,FaBoxes,FaNewspaper,FaUserAlt,FaPollH,FaThLarge} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <>
            <aside className='mainMenu'>
                <h2>
                    <FaBoxes style={{marginRight:'1.3rem'}}/>
                    Material Dashboard2
                </h2>
                <div className="borderBottomHeader"></div>
                <div className='mainMenuItem'>
                    <button>
                        <FaThLarge className='menuStyle'/>
                        <Link to='/'>
                            Dashboard
                        </Link>
                    </button>
                    <button>
                        <FaNewspaper className='menuStyle'/>
                        <Link to='/tables'>Tables</Link>
                    </button>
                    <button>
                        <FaScroll className='menuStyle'/>
                        <Link to='/billing'>
                            Billing
                        </Link>
                    </button>
                    
                    <button>
                        <FaBell className='menuStyle'/>
                        <Link to='/notifications'>
                            Notificatins
                        </Link>
                    </button>
                    <button>
                        <FaUserAlt className='menuStyle'/>
                        <Link to='/profile'>
                            Profile
                        </Link>
                    </button>
                    <button>
                        <FaSignInAlt className='menuStyle'/>
                        <Link to='/sign-in'>
                            Sign In
                        </Link>
                    </button>
                    <button>
                        <FaPollH className='menuStyle'/>
                        <Link to='/sign-Up'>
                            Sign Up
                        </Link>
                    </button>
                </div>
                <button className='btnMenu'>Upgrade To Pro</button>
            </aside>
        </>
    );
}
    
export default Menu;