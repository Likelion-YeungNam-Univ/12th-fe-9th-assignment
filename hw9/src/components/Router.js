import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home"
import Layout from "../components/Layout"
import About from "../components/About"
import TechService from "../components/TechService"
import Notice from "./notice/Notice"


const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}/>
                <Route path="/techService" element={<TechService/>}/>
                <Route path="/notice" element={<Notice/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;