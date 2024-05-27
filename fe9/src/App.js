import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Introduce from "./Introduce";
import Target from "./Target";
import Notice from "./Notice";
import Error from "./Error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>} />
          <Route path='/introduce' element={<Introduce/>} />
          <Route path='/target' element={<Target/>} />
          <Route path='/notice' element={<Notice/>} />
        </Route>
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
