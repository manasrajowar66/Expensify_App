import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from '../components/header';
import ExpensifyDashboardPage from '../components/dashboardPage';
import CreateExpensifyPage from '../components/addExpensifyPage';
import HelpPage from '../components/helpPage';
import EditExpensifyPage from '../components/editExpensifyPage';
import NotFoundPage from '../components/notFoundPage';


const AppRoute = () => (

         <BrowserRouter>
           <div>
       
            <Header/>

            <Switch>
              <Route path="/" component={ExpensifyDashboardPage} exact={true}/>
              <Route path="/create" component={CreateExpensifyPage} />
              <Route path="/edit/:id" component={EditExpensifyPage}/>
              <Route path="/help" component={HelpPage}/>
              <Route component={NotFoundPage}/>
           </Switch>

        
           </div>
        
        </BrowserRouter>

);

export default AppRoute;