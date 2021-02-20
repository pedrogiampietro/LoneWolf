import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Pages/Layout';

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
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
