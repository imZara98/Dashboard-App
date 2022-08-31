import React,{ useState } from 'react';
import Footer from '../Footer/Footer';
import Weather from '../WeatherApp/Weather';
import NavBar from '../NavBar/NavBar';
import Menu from '../Menu/Menu';
import Feature from '../Feature/Feature';
import Information from '../Information/Information';
import Project from '../Proje/proje';
import {FaBell,FaCog,FaArchive,FaShoppingCart,FaRegCreditCard} from "react-icons/fa";
import {BiUpArrowAlt,BiKey,BiUserPlus,BiCheck,BiBarChartAlt2,BiAlarm,BiBook,BiDotsVerticalRounded,BiStore} from "react-icons/bi";
import OrderView from '../OrderView/OrderView';
import {SaleChart,MobileApp,MobileChart} from '../Charts';
import './Dashboard.css';

const Dashboard = () => {
    const [datas] = useState (
        [
            { icons:<BiBook  style={{color: "white", fontSize : "55px",backgroundColor:'#1a1c1b',padding:'1.5rem',borderRadius:'10px',boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',position: 'relative',right: '130px',top: '15px'}}/>, property : "Booking", count : "340", discount : "+55%", timing : "than last week" , id:"1"},
            { icons:<BiBarChartAlt2 style={{color: "white", fontSize : "55px",backgroundColor:'#218edb',padding:'1.5rem',borderRadius:'10px',boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',position: 'relative',right: '130px',top: '15px'}}/>, property : "Today's User", count : "2,300", discount : "+3%", timing : "than last month", id:"2" },
            { icons:<BiStore style={{color: "white", fontSize : "55px",backgroundColor:'#259c39',padding:'1.5rem',borderRadius:'10px',boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',position: 'relative',right: '130px',top: '15px'}}/>, property : "Revenue", count : "34k", discount : "+1%", timing : "than yesterday" , id:"3"},
            { icons:<BiUserPlus style={{color: "white", fontSize : "55px",backgroundColor:'#d91434',padding:'1.5rem',borderRadius:'10px',boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',position: 'relative',right: '130px',top: '15px'}}/>, property : "Followers", count : "+91",discount:"+8%", timing : "Just updated", id:"4"},
        ]
    )
    const [information]= useState(
        [
            {name:"Website Views", use:"Last Campaign Performance", update:"campaign sent 2 days ago",icons:<BiAlarm />,id:"5"},
            {name:"Daily Sales",disscount:"(+15%)", use:"increase in today sales.", update:"updated 4 min ago",icons:<BiAlarm />,id:"6"},
            {name:"Completed Tasks", use:"Last Campaign Performance", update:"just update",icons:<BiAlarm />, id:"7"},
        ]
    )
    const [order] = useState(
        [
            {icon:<FaBell style={{backgroundColor:'#259c39',borderRadius:'100%',padding:'1rem',fontSize:'33px'}} /> ,title:"$2400, Design changes", date:"22 DEC 7:20 PM", id:"8"},
            {icon: <FaArchive style={{backgroundColor:'#f70a22',borderRadius:'100%',padding:'1rem',fontSize:'33px'}} />,title:"New order #1832412", date:"22 DEC 11 PM", id:"9"},
            {icon:<FaShoppingCart style={{backgroundColor:'#218edb',borderRadius:'100%',padding:'1rem',fontSize:'33px'}} />,title:"Server payments for April", date:"21 DEC 9:34 PM", id:"10"},
            {icon: <FaRegCreditCard style={{backgroundColor:'#f7610a',borderRadius:'100%',padding:'1rem',fontSize:'33px'}} />,title:"New card added for order #4395153", date:"20 DEC 2:20 PM", id:"11"},
            {icon: <BiKey style={{backgroundColor:'#d91434',borderRadius:'100%',padding:'1rem',fontSize:'33px'}} />,title:"New card added for order #4395153", date:"18 DEC 4:54 AM", id:"12"},
        ]
    )

    return(
        <div className='all'>
            <div className="main" id="title" style={{display:'flex', flexDirection:'row'}}>
                <div>
                    <Menu /> 
                </div>
                <div className='allSections'>
                   <NavBar />
                    <div className='component'>
                        {datas.map((data) =>{
                            return <Feature  {...data}  key = {data.id}/>
                        })}
                    </div>
                    <div className='componentBYCharts'>
                        <div className='information'>
                            {information.map((info) =>{
                                return <Information {...info} key = {info.id} />
                            })}
                        </div>
                        <div className='chart'>
                            <SaleChart />   
                            <MobileChart />
                            <MobileApp />
                        </div>
                    </div>  
                    <div className='sectionThird'>
                        <div className = 'project'>
                            <div className='projectDetail'>
                                <div>
                                    <h3>Projects</h3>
                                    <div className='detailSecondary'>
                                        <BiCheck className='detailIcon'/>
                                        <p>
                                        <strong>30 done</strong> this month
                                        </p>   
                                    </div>
                                </div>
                                <div style={{fontSize:'20px',marginBottom:'40px'}}>
                                    <BiDotsVerticalRounded />
                                </div>
                            </div>
                            <div>
                                <Project />
                            </div>
                        </div>
                        <div className='order'>
                            <h3 style={{fontSize:'1.8rem',marginBottom:'0.3rem'}}>Orders overview</h3>
                            <div style={{display:'flex'}}>
                                <BiUpArrowAlt style={{color:'green',marginRight:'0.5rem',fontSize:'1.7rem'}} />
                                <p style={{fontSize:'1.3rem'}}><strong style={{marginRight:'0.5rem'}}>24%</strong>this month</p>
                            </div>
                            <div>
                                {order.map((order) =>{
                                    return <OrderView {...order} key = {order.id}/>
                                })}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Weather />
                    </div>
                    <footer>
                       <Footer />
                    </footer>
                    <div className='setting'>
                        <FaCog className='settingIcon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;