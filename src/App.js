import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Goals from './Goals';
import Notices from './Notices';
import SignIn from './SignIn';
import Layout from './Layout';
import Error from './Error';
import Profile from './Profile';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="goals" element={<Goals />} />
          <Route path="notices" element={<Notices />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="profile/:userName" element={<Profile />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
