import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Layout from "./layouts/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={ <Layout/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
