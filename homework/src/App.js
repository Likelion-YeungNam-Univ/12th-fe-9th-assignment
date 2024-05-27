import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Info } from "./Info";
import { Goal } from "./Goal";
import { Nav } from "./Nav";
import { Notice } from "./Notice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/goal" element={<Goal />} />

          <Route path="/notice" element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
