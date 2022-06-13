
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/MainScreen/Main';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Fav from './components/Favorites/Fav';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {


  useEffect(() =>{
    Aos.init({duration:2000});
  },[])
  
  return (
    <div className='App'>

    <Router>
    <div>
    <Navbar/>
  <Routes>
   
   <Route path='/' element={<Main/>}/>
   <Route path='favorites' element={<Fav/>}/>
   
 </Routes>
 </div>
    </Router>
    </div>

   
  );
}

export default App;
