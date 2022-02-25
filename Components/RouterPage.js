import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import './Componentpage.css';
import Shopping from './Shopping';
import Contact from './Contact';
import Footer from './Footer';
 

 function RouterPage() {
  return (
       <BrowserRouter>
         <Navigation />
         <Routes>
             <Route path='/' element={<Home />}></Route>
             <Route path='/Shopping' element={<Shopping />}></Route>
             <Route path='/contact/:Total_Amount/:Total_Items' element={<Contact />}></Route>
           </Routes>
           <Footer />
        </BrowserRouter>
  )
}

export default RouterPage;
