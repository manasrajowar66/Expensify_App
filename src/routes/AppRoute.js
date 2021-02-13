import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ExpensifyDashboardPage from '../components/dashboardPage';
import CreateExpensifyPage from '../components/addExpensifyPage';
import EditExpensifyPage from '../components/editExpensifyPage';
import LoginPage from '../components/loginPage';
import NotFoundPage from '../components/notFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRoute = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpensifyDashboardPage} />
        <PrivateRoute path="/create" component={CreateExpensifyPage} />
        <PrivateRoute path="/edit/:id" component={EditExpensifyPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRoute;