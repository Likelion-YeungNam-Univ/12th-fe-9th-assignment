import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';  // Navbar 컴포넌트 불러오기
import Home from './Home';
import Introduction from './Introduction';
import NotFound from './NotFound';
// 다른 컴포넌트도 필요에 따라 불러옵니다.

function App() {
  return (
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path='*' element={<NotFound/>}/>
        {/* 여기에 더 많은 라우트를 추가할 수 있습니다 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
