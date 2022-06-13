import {ActionsTypes} from '../constants/action-types';





export const addToFav = (cityWeather) =>{
    return {
        type: ActionsTypes.ADD_TO_FAVORITES,
        payload: cityWeather
    }
}

export const removeFav = (cityWeather) =>{
   
    return {
        type: ActionsTypes.REMOVE_FROM_FAVORITES,
        payload: cityWeather
    }
}

export const isLoading = () =>{
   
    return {
        type: ActionsTypes.IS_LOADING,
        
    }
}

export const stopLoading = () =>{
   
    return {
        type: ActionsTypes.STOP_LOADING,
        
    }
}