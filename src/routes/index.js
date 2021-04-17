import React from "react";
import { Redirect, Route, BrowserRouter, Switch } from "react-router-dom";
import { LoginPage, StatisticPage } from "../containers";

const PrivateRoute = ({ children, ...rest }) => {
    let auth = false;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
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
        const auth = true

        if (auth)
            return <Redirect to="/statistics" />
        else
            return <Redirect to="/login" />
    }

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/statistics" component={StatisticPage} />
                <Route path="/login" component={LoginPage} />
                <Route exact path="/" render={defaultRouter} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rutas
