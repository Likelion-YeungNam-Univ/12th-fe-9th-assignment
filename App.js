import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Goals from './pages/Goals';
import Notices from './pages/Notices';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/goals" component={Goals} />
        <Route path="/notices" component={Notices} />
      </Switch>
    </div>
  );
}

export default App;
