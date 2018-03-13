/**
 * Created by Administrator on 2018/3/10 0010.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from "page/layout/Layout.jsx";
import Home from "page/home/Home.jsx";
import Login from "page/login/Login.jsx";
import ErrorPage from "page/error-page/ErrorPage.jsx";

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import 'styles/main.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={() => (
                        <Layout>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route component={ErrorPage}/>
                            </Switch>
                        </Layout>
                    )
                    }/>
                </Switch>
            </Router>
        );
    };
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);