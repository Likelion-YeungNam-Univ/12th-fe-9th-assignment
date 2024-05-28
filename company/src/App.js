import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Home from './Home';

import NotFound from '../src/page/NotFound';
import BestProduct from './components/BestProduct';
import CompanyInfo from './page/CompanyInfo';
import CompanyEthics from './page/CompanyEthics';
import Notification from './page/Notification';


function App() {
  return (
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/products/:id' element={<BestProduct></BestProduct>}></Route>
        <Route path='/introduction' element={<CompanyInfo/>}/>
        <Route path='/introduction/ethics' element={<CompanyEthics/>}></Route>
        <Route path='/support/notification' element={<Notification/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
