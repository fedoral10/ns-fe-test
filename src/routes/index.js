import { Redirect, Route, Router, Switch } from "react-router";
import { Link } from "react-router-dom";

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
    return (
        <Router>
            <div>

                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/public">
                        <PublicPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <PrivateRoute path="/protected">
                        <ProtectedPage />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    )
}

export default Rutas
