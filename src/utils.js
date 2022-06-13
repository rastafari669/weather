const getDayArr = (theDay) =>{
    if(theDay){
        let date = new Date(theDay);
        
        let day = date.toLocaleString('en-us', {weekday: 'long'});
       
       return day; 
    }

}

const getDay = (theDay) =>{
     let date = new Date(theDay);
     let day = date.toLocaleString('en-us', {weekday: 'long'});
    return day;
}





export {getDayArr,getDay}