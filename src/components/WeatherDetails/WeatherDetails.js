import React from 'react';
import cloudy from '../../Images/cloudy-day.png';
import './WeatherDetails.css';
import {getDayArr} from '../../utils';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';




const WeatherDetails = ({cityWeatherCur,city}) => {

  const loader = useSelector((state) => state.city.isLoading);
    

  return (
    
<>
{cityWeatherCur.cityDetails &&  
(

  <Card cityWeatherCur={cityWeatherCur} />

)
}

{cityWeatherCur.cityDetails && <h1>Next Five Days</h1>}


<div data-aos="fade-up" className='container-cards'>

{cityWeatherCur.cityDetails &&
    cityWeatherCur.dailyFive.map((item,i) => {
        
  return  <div key={i} className="card card-info">
  <img className="card-img-top" src={cloudy} alt="Card"/>
  <div className="card-body">
  {/* <h4>{cityWeatherCur.cityDetails.cityName}</h4> */}
    <h5 className="card-title">{getDayArr(item.Date)}</h5>
    <p className="card-text tempText">{item.Day.IconPhrase}</p>
    <p className="card-text">{item.Temperature.Maximum.Value} F</p>
   
  </div>
</div>

      
    })
}
</div>
</>

  )
}

export default WeatherDetails