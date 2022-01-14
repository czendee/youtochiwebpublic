import  React from 'react';
import  { Switch } from 'react-router-dom';
import {PrivateRoute, PublicRoute} from './auth';
import Home from './view/Home';
import Login from './view/Login';
import Recuperar from './view/Recuperar';
import Cambiar from './view/Cambiar';
import Valida from './view/Valida';
import Enviar from './view/Enviar';

const Routes = () => {
        return (
            <Switch>
               <PublicRoute exact path='/quote/' component ={Login} />
               <PublicRoute exact path='/quote/account/reset' component ={Recuperar} /> 
               <PublicRoute exact path='/quote/account/change' component ={Cambiar} /> 
               <PublicRoute exact path='/quote/account/validation' component ={Valida} />
               <PublicRoute exact path='/quote/account/send' component ={Enviar} /> 

               <PrivateRoute exact path='/quote/home' component ={Home} />
            </Switch>
        );
    }
export default Routes;
