import React from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// Pages
import Dashboard from './pages/dashboard'
import LandingPage from './pages/ladingPage';

import AuthenticatedRoute from './pages/AuthenticatedRoute'

function App() {
  return (
    <div className="APPCORTAINER">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/login" component={LandingPage}/>
          <Route exact path="/signup" component={LandingPage}/>
          <AuthenticatedRoute exact path="/dashboard" component={Dashboard}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
