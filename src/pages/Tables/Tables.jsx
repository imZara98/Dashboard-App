import Menu from '../../components/Menu/Menu';
import NavBar from '../../components/NavBar/NavBar';
import classes from './tables.module.css';
import boy from '../../components/Pictures/boy.png';
import girl from '../../components/Pictures/girl.png';
import boyb from '../../components/Pictures/boyb.png';
import ggirl from '../../components/Pictures/ggirl.png';
import Footer from '../../components/Footer/Footer';

const Tables = () => {
    return ( 
        <div className={classes.tables}>
            <div><Menu/></div>
            <div className={classes.tableDetail}>
                <div className={classes.nav}> <NavBar/> </div>
                <section className={classes.detailHead}>
                        <h2>Authors Table</h2>
                </section>
                <div className={classes.details}>
                    <table>
                        <thead>
                            <tr>
                                <th>AUTHOR</th>
                                <th>FUNCTION</th>
                                <th>STATUS</th>
                                <th>EMPLOYED</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={classes.author}>
                                    <img src={boy} className={classes.avatar} alt='he is manager'/>
                                    <div className={classes.detail}>
                                        <h3>John Micheal</h3>
                                        <p>john@creative-tim.com</p>
                                    </div>
                                </td>
                                <td className={classes.function}>
                                    <h3>Manager</h3>
                                    <p>Organization</p>
                                </td>
                                <td className={classes.online}>ONLINE</td>
                                <td className={classes.emp}>23/04/18</td>
                                <td className={classes.action}>Edit</td>
                            </tr>
                            <tr>
                                <td className={classes.author}>
                                    <img src={girl} className={classes.avatar} alt='she is programator' />
                                    <div className={classes.detail}>
                                        <h3>Alexa Liras</h3>
                                        <p>alexa@creative-tim.com</p>
                                    </div>
                                </td>
                                <td className={classes.function}>
                                    <h3>Programator</h3>
                                    <p>Developer</p>
                                </td>
                                <td className={classes.offline}>OFFLINE</td>
                                <td className={classes.emp}>11/01/19</td>
                                <td className={classes.action}>Edit</td>
                            </tr>
                            <tr>
                                <td className={classes.author}>
                                    <img src={ggirl} className={classes.avatar} alt='he is executive'/>
                                    <div className={classes.detail}>
                                        <h3>Laurent Perrier</h3>
                                        <p>laurent@creative-tim.com</p>
                                    </div>
                                </td>
                                <td className={classes.function}>
                                    <h3>Executive</h3>
                                    <p>Projects</p>
                                </td>
                                <td className={classes.online}>ONLINE</td>
                                <td className={classes.emp}>19/09/17</td>
                                <td className={classes.action}>Edit</td>
                            </tr>
                            <tr>
                                <td className={classes.author}>
                                    <img src={boyb} className={classes.avatar} alt='he is programator'/>
                                    <div className={classes.detail}>
                                        <h3>Micheal Levi</h3>
                                        <p>micheal@creative-tim.com</p>
                                    </div>
                                </td>
                                <td className={classes.function}>
                                    <h3>Programator</h3>
                                    <p>Developer</p>
                                </td>
                                <td className={classes.online}>ONLINE</td>
                                <td className={classes.emp}>24/12/08</td>
                                <td className={classes.action}>Edit</td>
                            </tr>
                            <tr>
                                <td className={classes.author}>
                                    <img src={boyb} className={classes.avatar} alt='he is executive'/>
                                    <div className={classes.detail}>
                                        <h3>Richard Gran</h3>
                                        <p>richard@creative-tim.com</p>
                                    </div>
                                </td>
                                <td className={classes.function}>
                                    <h3>Executive</h3>
                                    <p>Projects</p>
                                </td>
                                <td className={classes.offline}>OFFLINE</td>
                                <td className={classes.emp}>04/10/21</td>
                                <td className={classes.action}>Edit</td>
                            </tr>
                            <tr className={classes.test}>
                                <td className={classes.author}>
                                    <img src={girl} className={classes.avatar} alt='she is programator'/>
                                    <div className={classes.detail}>
                                        <h3>Miriam Eric</h3>
                                        <p>miriam@creative-tim.com</p>
                                    </div>
                                </td>
                                <td className={classes.function}>
                                    <h3>Programator</h3>
                                    <p>Developer</p>
                                </td>
                                <td className={classes.offline}>OFFLINE</td>
                                <td className={classes.emp}>14/09/20</td>
                                <td className={classes.action}>Edit</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
}
 
export default Tables;

