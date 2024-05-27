import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./component/Layout";
import Home from "./component/Home";
import Info from "./component/Info";
import Goal from "./component/Goal";
import Notice from "./component/Notice";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/home' element={<Home />} />
            <Route path='/info' element={<Info />} />
            <Route path='/goal' element={<Goal />} />
            <Route path='/notice' element={<Notice />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
   
  
  );
}

export default App;
