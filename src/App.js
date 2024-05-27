import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Error from './Error'
import Notice from './Notice';
import Target from './Target';
import Info from './Info';
// import NoticeItem from './NoticeItem';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='/info' element={<Info/>}></Route>
        <Route path='/target' element={<Target/>}></Route>
        <Route path='/notice' element={<Notice/>}></Route>
        {/* <Route path='/notice/:id' element={<NoticeItem/>}></Route> */}
      </Route>
        <Route path='*' element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;