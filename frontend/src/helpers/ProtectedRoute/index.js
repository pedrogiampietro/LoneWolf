import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../Account';

const ProtectedRoute = ({ component, path }) => {
  return getToken() ? (
    <Route component={component} path={path} />
  ) : (
    <Redirect to="/sign-in" />
  );
};

export default ProtectedRoute;
