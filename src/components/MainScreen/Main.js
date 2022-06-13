import React, { useState,useEffect } from 'react';
import './Main.css';
import {useLocation} from 'react-router-dom'
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import {getApiId,getApiCityWeather,getApiFiveDays} from '../../api';
import {useDispatch} from 'react-redux';
import {isLoading,stopLoading} from '../../redux/actions/weatherActions';
import { useSelector } from 'react-redux';
import { Audio } from  'react-loader-spinner'





const Main = () => {

  const [city, setCity] = useState('');
  const [error,setError] = useState('');
  const [cityWeatherCur,setCityWeatherCur] = useState({});
  
  const location = useLocation();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.city);
  console.log(state);

  useEffect(() => {
    const { from } = location.state ? location.state : "null";
  if(from && from !=='Tel-Aviv'){
     
    const getDefaultCity = async (name) =>{
      dispatch(isLoading())
      const City = await getApiId(name)
     
       const cityName = City.data[0]?.LocalizedName;
        const cityId = City.data[0]?.Key;
      const cityWeather = await getApiCityWeather(cityId)
      dispatch(stopLoading())
      const DailyFive = await getApiFiveDays(cityId)
      setCityWeatherCur({
        cityDetails:{...cityWeather.data[0],cityName:cityName},dailyFive:DailyFive.data.DailyForecasts})    
    }
    getDefaultCity(from)
  }else{
    
    const getDefaultCity = async (id) =>{
     dispatch(isLoading())
      const cityWeather = await getApiCityWeather(id)
     
      const DailyFive = await getApiFiveDays(id)

      dispatch(stopLoading())
      setCityWeatherCur({
        cityDetails:{...cityWeather.data[0],cityName:'Tel-Aviv'},dailyFive:DailyFive.data.DailyForecasts})    
    }
    getDefaultCity(215854)   
  }
},[location.state]);

  

  const check = async (value) =>{
    const regex = /[A-Za-z]/;
    const chars = value.split('');
    const char = chars.pop();
    if (!regex.test(char)) {
      value = chars.join('');
      
      setError(`״${char}״ is not a valid character. English letters only`)
    }else{
      setError('')
       setCity(value)
    }
  }

  const EnterCity = async (e) =>{
    if(city){
      if(e.key === 'Enter'){
         dispatch(isLoading())
        const City = await getApiId(city)
        const cityName = City.data[0]?.LocalizedName;
        const cityId = City.data[0]?.Key;
        

        if(cityId){

          const cityWeather = await getApiCityWeather(cityId)
          const DailyFive = await getApiFiveDays(cityId)
           dispatch(stopLoading())
        
          setCityWeatherCur({
            cityDetails:{...cityWeather.data[0],cityName},dailyFive:DailyFive.data.DailyForecasts})    
           
        }else{
          setError('Unknown city name')
        }
      
       }
    }
  }



  return ( 
    <>
    <div className='search-outer'>
      <h2>Press Enter to Search</h2>
     
        <input onKeyDown={EnterCity} placeholder='Search for City...' onChange={event => check(event.target.value)} className='searchbar'  type="text" />
        <p>{error}</p>
        
        {!state.isLoading ?<WeatherDetails cityWeatherCur={cityWeatherCur} city={city}/>: <Audio
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />}
  </div>
    </>
  )
}

export default Main