import axios from 'axios';
import { useState} from 'react';
import style from './weather.module.css';

const Weather = (props) => {
    const [data,setData] = useState({})
    const [location,setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9f10ca46d9e3c56f3848895163f2540d`
    const searchLocation = (event) =>{
        if (event.key === 'Enter'){
            axios.get(url).then((response) =>{
                setData(response.data)
                console.log(response.data)
            })
        searchLocation('');
        }
    }
    return ( 
        <div className={style.weatherApp}>
            <h2>Weather Conditions</h2>
            <div className={style.search}>
                <p>Please enter your Location</p>
                <input type='text' placeholder='Enter Location' value={location} onChange={ event => setLocation(event.target.value)} onKeyPress={searchLocation} />
            </div>
            <div className={style.containers}>
                <div className={style.top}>
                    <div className={style.location}>
                        <p>{data.name}</p>
                    </div>
                    <div className={style.temp}>
                        {data.main ? <h3>{data.main.temp} °F</h3> : null}
                    </div>
                    <div className={style.description}>
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.feels}>
                        {data.main? <p className='bold'>{data.main.feels_like} °F <p>Feels Like</p></p> : null}   
                    </div>             
                    <div className={style.humidity}>
                        {data.main ? <p className='bold'>{data.main.humidity}% <p>Humidity</p></p> : null}   
                    </div>
                    <div className={style.wind}>
                        {data.wind ? <p className='bold'>{data.wind.speed}MPH <p>Wind Speed</p></p> : null}
                    </div>
                </div>
            </div>
        </div>
     );
}
export default Weather;