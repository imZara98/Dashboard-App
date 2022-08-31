import Menu from '../../components/Menu/Menu';
import NavBar from '../../components/NavBar/NavBar';
import classes from './billing.module.css';
import { Link } from 'react-router-dom';
import { FaWifi,FaLandmark,FaPaypal,FaPen,FaTrashAlt,FaCalendarAlt,FaChevronDown,FaChevronUp,FaExclamation } from "react-icons/fa";
import { FcSignature,FcCurrencyExchange } from "react-icons/fc";
import Footer from '../../components/Footer/Footer';

const Billing = () => {
    return ( 
        <div className={classes.allSection}>
             <div className={classes.menu}>
                    <Menu />
                </div>
            <div className={classes.side}>
                <div className={classes.main}>
                    <div className={classes.nav}>
                        <NavBar />
                    </div>
                    <div className={classes.feature}>
                        <div className={classes.featureDetail}>
                            <div className={classes.details}>
                                <div className={classes.detail}>
                                    <div className={classes.card}>
                                        <FaWifi className={classes.wifi}/>
                                        <h3>4562112245647852</h3>
                                        <div className={classes.data}>
                                            <p>Card Holder</p>
                                            <p>Expires</p>
                                        </div>
                                        <div className={classes.name}>
                                            <h3>Jack Peterson</h3>
                                            <h3>11/22</h3>
                                        </div>
                                    </div>
                                    <div className={classes.salary}>
                                        <FaLandmark className={classes.mark}/>
                                        <h3 className={classes.title}>Salary</h3>
                                        <p>Belong Intractive</p>
                                        <h3 className={classes.price}>+$2000</h3>
                                    </div>
                                    <div className={classes.salary}>
                                        <FaPaypal className={classes.mark}/>
                                        <h3 className={classes.title}>Paypal</h3>
                                        <p>Belong Intractive</p>
                                        <h3 className={classes.price}>$455.00</h3>
                                    </div>
                                </div>
                                <div className={classes.payment}>
                                    <div className={classes.payHeader}>
                                        <h3>Payment Method</h3>
                                        <button className={classes.btn}>+ADD NEW CARD</button>
                                    </div>
                                    <div className={classes.datas}>
                                        <div className={classes.datasDetail}>
                                            <FcCurrencyExchange className={classes.logo} />
                                            <h3>**** **** **** 7852</h3>
                                            <FaPen className={classes.edit}/>
                                        </div>
                                        <div className={classes.datasDetail}>
                                            <FcSignature className={classes.logo} />
                                            <h3>**** **** **** 5248</h3>
                                            <FaPen className={classes.edit}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={classes.invoice}>
                                <div className={classes.voiceHeader}>
                                    <h3>Invoices</h3>
                                    <button className={classes.btnvu}>VIEW ALL</button>
                                </div>
                                <div className={classes.voiceBody}>
                                    <table className={classes.voiceTable}>
                                        <tbody>
                                        <tr>
                                            <td className={classes.tableTitle}>
                                                <h3>March, 01, 2020</h3>
                                                <p>#MS-415646</p>
                                            </td>
                                            <td>$180</td>
                                            <td>
                                                <Link to = "#" className={classes.link}>PDF</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.tableTitle}>
                                                <h3>February, 10, 2021</h3>
                                                <p>#RV-126749</p>
                                            </td>
                                            <td>$250</td>
                                            <td>
                                                <Link to = "#" className={classes.link}>PDF</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.tableTitle}>
                                                <h3>April, 05, 2020</h3>
                                                <p>#QW-103578</p>
                                            </td>
                                            <td>$120</td>
                                            <td>
                                                <Link to = "#" className={classes.link}>PDF</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.tableTitle}>
                                                <h3>June, 25, 2019</h3>
                                                <p>#MS-415646</p>
                                            </td>
                                            <td>$180</td>
                                            <td>
                                                <Link to = "#" className={classes.link}>PDF</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.tableTitle}>
                                                <h3>March, 01, 2019</h3>
                                                <p>#AR-803481</p>
                                            </td>
                                            <td>$300</td>
                                            <td>
                                                <Link to = "#" className={classes.link}>PDF</Link>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className={classes.news}>
                            <div className={classes.information}>
                                <h3>Billing Information</h3>
                                <div className={classes.informations}>
                                    <div className={classes.infoHeader}>
                                        <div className={classes.infoTitle}>
                                            <h3>Oliver Liam</h3>
                                            <div className={classes.option}>
                                                <p className={classes.del}>
                                                    <FaTrashAlt/>
                                                    DELETE
                                                </p>
                                                <p className={classes.edt}>
                                                    <FaPen/>
                                                    EDITE
                                                </p>
                                            </div>
                                        </div>
                                        <div className={classes.property}>
                                            <div className={classes.address}>
                                                <h4>Company Name:</h4>
                                                <h3>Viking Burrito</h3>
                                            </div>
                                            <div className={classes.address}>
                                                <h4>Email Address:</h4>
                                                <p>oliver@burrito.com</p>
                                            </div>
                                            <div className={classes.address}>
                                                <h4>VAT Number:</h4>
                                                <p>FRB1234567</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.informations}>
                                    <div className={classes.infoHeader}>
                                        <div className={classes.infoTitle}>
                                            <h3>Lucas Harper</h3>
                                            <div className={classes.option}>
                                                <p className={classes.del}>
                                                    <FaTrashAlt/>
                                                    DELETE
                                                </p>
                                                <p className={classes.edt}>
                                                    <FaPen/>
                                                    EDITE
                                                </p>
                                            </div>
                                        </div>
                                        <div className={classes.property}>
                                            <div className={classes.address}>
                                                <h4>Company Name:</h4>
                                                <h3>Stone Tech Zone</h3>
                                            </div>
                                            <div className={classes.address}>
                                                <h4>Email Address:</h4>
                                                <p>lucas@stone-tech.com</p>
                                            </div>
                                            <div className={classes.address}>
                                                <h4>VAT Number:</h4>
                                                <p>FRB1235476</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.informations}>
                                    <div className={classes.infoHeader}>
                                        <div className={classes.infoTitle}>
                                            <h3>Ethan James</h3>
                                            <div className={classes.option}>
                                                <p className={classes.del}>
                                                    <FaTrashAlt/>
                                                    DELETE
                                                </p>
                                                <p className={classes.edt}>
                                                    <FaPen/>
                                                    EDITE
                                                </p>
                                            </div>
                                        </div>
                                        <div className={classes.property}>
                                            <div className={classes.address}>
                                                <h4>Company Name:</h4>
                                                <h3>Fiber Notion</h3>
                                            </div>
                                            <div className={classes.address}>
                                                <h4>Email Address:</h4>
                                                <p>ethan@fiber.com</p>
                                            </div>
                                            <div className={classes.address}>
                                                <h4>VAT Number:</h4>
                                                <p>FRB1235467</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.transaction}>
                                <div className={classes.trDate}>
                                    <div>
                                        <h3>Your Transaction's</h3>
                                    </div>
                                    <div className={classes.date}>
                                        <FaCalendarAlt className={classes.calender} />
                                        <p>23-30 March 2020</p>
                                    </div>
                                </div>
                                <div className={classes.census}>
                                    <h3>NEWEST</h3>
                                    <div className={classes.netflix}>
                                        <FaChevronDown className={classes.down} />
                                        <div className={classes.netflixDetail}>
                                            <p className={classes.newTitle}>Netflix</p>
                                            <p className={classes.time}>27 March 2020, at 12:30 PM</p>
                                        </div>
                                        <p className={classes.loss}>- $ 2,500</p>
                                    </div>
                                    <div className={classes.apple}>
                                        <FaChevronUp className={classes.up} />
                                        <div className={classes.timing}>
                                            <p className={classes.newTitle}>Apple</p>
                                            <p className={classes.time}>27 March 2020, at 04:30 AM</p>
                                        </div>
                                        <p className={classes.sood}>+ $ 2,000</p>
                                    </div>
                                </div>
                                <div className={classes.census}>
                                    <h3>YESTERDAY</h3>
                                    <div className={classes.netflix}>
                                        <FaChevronUp className={classes.up} />
                                        <div className={classes.netflixDetail}>
                                            <p className={classes.newTitle}>Stripe</p>
                                            <p className={classes.time}>26 March 2020, at 13:45 PM</p>
                                        </div>
                                        <p className={classes.loss}>+ $ 750</p>
                                    </div>
                                    <div className={classes.apple}>
                                        <FaChevronUp className={classes.up} />
                                        <div className={classes.timing}>
                                            <p className={classes.newTitle}>HubSpot</p>
                                            <p className={classes.time}>26 March 2020, at 12:30 PM</p>
                                        </div>
                                        <p className={classes.sood}>+ $ 1,000</p>
                                    </div>
                                    <div className={classes.apple}>
                                        <FaChevronUp className={classes.up} />
                                        <div className={classes.timing}>
                                            <p className={classes.newTitle}>Creative Tim</p>
                                            <p className={classes.time}>26 March 2020, at 08:30 AM</p>
                                        </div>
                                        <p className={classes.sood}>+ $ 2,500</p>
                                    </div>
                                    <div className={classes.apple}>
                                        <FaExclamation className={classes.exc} />
                                        <div className={classes.timing}>
                                            <p className={classes.newTitle}>Webflow</p>
                                            <p className={classes.time}>26 March 2020, at 05:00 AM</p>
                                        </div>
                                        <p className={classes.pend}>pending</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
     );
}
 
export default Billing;