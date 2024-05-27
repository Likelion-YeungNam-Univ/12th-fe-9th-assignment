import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Info } from "./Info";
import { Goal } from "./Goal";
import { Nav } from "./Nav";
import { Notice } from "./Notice";
import { CreateNotice } from "./CreateNotice";
import { Detail } from "./Detail";
import { Update } from "./Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/createNotice" element={<CreateNotice />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/update/:id" element={<Update />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
