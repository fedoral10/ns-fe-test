import React from "react";
import { Redirect, Route, BrowserRouter, Switch } from "react-router-dom";
import { LoginPage, StatisticPage } from "../containers";

const isAuth = () => {
    console.log("SessionStorage", sessionStorage.getItem('token') )
    if (sessionStorage.getItem('token') === null) {
        return false
    } else {
        return true
    }
}

const PrivateRoute = ({ children, ...rest }) => {

    const auth = isAuth()
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth === true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

const Rutas = () => {

    const defaultRouter = () => {
        const auth = isAuth()

        if (auth)
            return <Redirect to="/statistics" />
        else
            return <Redirect to="/login" />
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={defaultRouter} />
                <PrivateRoute path="/statistics"> <StatisticPage /></PrivateRoute>
                <Route path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rutas
