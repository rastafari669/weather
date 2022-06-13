import axios from 'axios';


const apikey = 'cJUgjltovAoW7iGdjROMvmbQTlCGavUX';
const BASEURL ='http://dataservice.accuweather.com'

const getApiId =  async (city) =>{
  return  await axios.get(`${BASEURL}/locations/v1/cities/autocomplete?apikey=${apikey}&q=${city}`)
  .catch((err) =>{
    
    alert(err.message)
  })
}

const getApiCityWeather = async (cityId) =>{
    return await axios.get(`${BASEURL}/currentconditions/v1/${cityId}?apikey=${apikey}`)
    .catch((err) =>{
      
      alert(err.message)
    })
}

const getApiFiveDays = async (cityId) =>{
    return await axios.get(`${BASEURL}/forecasts/v1/daily/5day/${cityId}?apikey=${apikey}`) 
    .catch((err) =>{
      
      alert(err.message)
    })
}



export  {getApiId,getApiCityWeather,getApiFiveDays}