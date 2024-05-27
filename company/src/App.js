import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Navbar 컴포넌트 불러오기
import Home from './Home';
import Introduction from './Introduction';
import NotFound from './NotFound';
import BestProduct from './components/BestProduct';
import CompanyInfo from './page/CompanyInfo';
import CompanyEthics from './page/CompanyEthics';
// 다른 컴포넌트도 필요에 따라 불러옵니다.

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
        {/* 여기에 더 많은 라우트를 추가할 수 있습니다 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
