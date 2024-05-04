import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => (
      true /* Simulation of auth check */
      ? <Component {...props} />
      : <Redirect to='/login' />
    )} />
  );
}

export default PrivateRoute;