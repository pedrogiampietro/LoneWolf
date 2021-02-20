import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Pages/Layout';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
// import Dashboard from './Pages/Dashboard';
import Team from './Pages/YourTeam';

import './assets/css/font-awesome.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/flag-icon.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/chosen.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <Route exact path="/teams" component={Team} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
