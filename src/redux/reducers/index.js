import {combineReducers} from 'redux';
import {weatherReducer} from './weatherReducer';


const reducers = combineReducers({
    city: weatherReducer
})


export default reducers;