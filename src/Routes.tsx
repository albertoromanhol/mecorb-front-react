/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './Feature/Home/Home';

export function Routes() {

    function PrivateRoute({ children, ...rest }: any) {
        return (
            <Route
                {...rest}
                render={() =>
                    children
                }
            />       
        );
    }
    
    return (
        <Router>
            <Switch>                 
                <PrivateRoute exact path="/">
                    <Home />
                </PrivateRoute>
                <PrivateRoute path="*">
                    <Home />
                </PrivateRoute>
            </Switch>                
        </Router>        
    );
}