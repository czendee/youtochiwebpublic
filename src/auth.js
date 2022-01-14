import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const isAuth = () => {
    if (localStorage.getItem('token-chargebacks-jwt') !== null && localStorage.getItem('token-chargebacks-refresh')){
        return true
    }
    return false;
};
const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props =>
            isAuth() ? (
                <Component {...props} />
            ): (
                <Redirect 
                to={{
                    pathname: '/chargebacks',
                    state: {message: 'Ingresa tus accesos'}
                }}
                />
            )}
        />
    );
};

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => isAuth() ? (
            <Redirect 
            to={{
                pathname: '/chargebacks/home',
                state: {message: 'Session Activa'}
            }}
            />
        ):(<Component {...props} />)}></Route>
    );
};

export {PrivateRoute, PublicRoute};