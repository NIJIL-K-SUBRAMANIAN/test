import Header from './assets/header/Header'
import Navbar1 from './assets/linkholder/Navbar1'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './assets/linkholder/navcomponents/Home';

import OrganicProducts from './assets/linkholder/navcomponents/OrganicProducts';
import Bar from './assets/bar/Bar';
import './App.css';






function App() {
 

  return (
   <>
  <Header/>
  <Router>
                  <Navbar1/>
                  <Bar/>
                  
        <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/organicproducts' element={< OrganicProducts />}></Route>
        </Routes>
  </Router>


  

   </>
  )
}

export default App
