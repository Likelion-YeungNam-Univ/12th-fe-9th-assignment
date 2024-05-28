import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import Layout from "./Layout";
import Error from "./Error";
import Profile from "./Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element ={<Home/>}/>
        <Route path="/progile/:userName" element={<Profile/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
