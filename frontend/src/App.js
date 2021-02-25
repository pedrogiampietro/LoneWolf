import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { initAccount } from './actions/AccountActions';

import Layout from './Pages/Layout';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
// import Dashboard from './Pages/Dashboard';
import AllTeams from './Pages/Teams/AllTeams';
import CreateTeam from './Pages/Teams/CreateTeam';
import Profile from './Pages/Auth/Profile';

import ProtectedRoute from './helpers/ProtectedRoute';

import './assets/css/font-awesome.min.css';
import './assets/css/bootstrap.css';
import './assets/css/flag-icon.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/chosen.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';

const App = ({ initAccount }) => {
  useEffect(() => {
    initAccount();
  }, [initAccount]);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <Route exact path="/teams" component={AllTeams} />

          {/* Protected Routes */}
          <ProtectedRoute exact path="/teams/create" component={CreateTeam} />
          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
  };
};

export default connect(mapStateToProps, { initAccount })(App);
