import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import CreateProfile from '../profile-form/CreateProfile';
import EditProfile from '../profile-form/EditProfile';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import NotFound from '../layout/NotFound';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';

const Routes = () => {
    return (
        <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
              <Route component={NotFound} />
            </Switch>
          </section>
    )
}

export default Routes
