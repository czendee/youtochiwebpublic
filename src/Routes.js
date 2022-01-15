import  React from 'react';
import  { Switch } from 'react-router-dom';
import {PrivateRoute, PublicRoute} from './auth';
import Home from './view/Home';
import History from './view/History';
import QuoteDetails from './view/QuoteDetails';
import UsersDetails from './view/UsersDetails';
import Quote from './view/Quote';
import QuoteCreated from './view/Quotecreated';
import QuotePDF from './view/Quotepdf';
import Users from './view/Users';
import Login from './view/Login';
import Recuperar from './view/Recuperar';
import Listacotizaciones from './view/Listacotizaciones';
import Creacotizaciones from './view/Creacotizaciones';


import Cambiar from './view/Cambiar';
import Valida from './view/Valida';
import Enviar from './view/Enviar';
const Routes = () => {
        return (
            <Switch>
               <PublicRoute exact path='/quote/' component ={Login} />
               <PublicRoute exact path='/quote/account/reset' component ={Recuperar} /> 
                <PublicRoute exact path='/quote/listaco' component ={Listacotizaciones} /> 
                <PublicRoute exact path='/quote/creaco' component ={Creacotizaciones} />  
               <PublicRoute exact path='/quote/account/change' component ={Cambiar} /> 
               <PublicRoute exact path='/quote/account/validation' component ={Valida} />
               <PublicRoute exact path='/quote/account/send' component ={Enviar} /> 
               <PrivateRoute exact path='/quote/quotes' component ={History} />
               <PrivateRoute exact path='/quote/users' component ={Users} />
               <PrivateRoute exact path='/quote/quote' component ={Quote} />
               <PrivateRoute exact path='/quote/quotecreated' component ={QuoteCreated} />
               <PrivateRoute exact path='/quote/quotepdf' component ={QuotePDF} />
                
               <PrivateRoute exact path='/quote/quotedetails' component ={QuoteDetails} />
               <PrivateRoute exact path='/quote/usersdetails' component ={UsersDetails} />
               <PrivateRoute exact path='/quote/home' component ={Home} />
            </Switch>
        );
    }
export default Routes;
