import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import AppLayout from "page/layout/AppLayout.jsx";
import Home from "page/home/Home.jsx";
import Login from "page/login/Login.jsx";
import AntTable from "page/ant-table/AntTable.jsx";
import ErrorPage from "page/error-page/ErrorPage.jsx";
import AntForm from "page/ant-form/AntForm";
import User from "page/user/User";
import ProductRouter from "page/product/ProductRouter";

import 'antd/dist/antd.less';
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
                        <AppLayout>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/antTable" exact component={AntTable}/>
                                <Route path="/antForm" component={AntForm}/>
                                <Route path="/user/index" component={User}/>
                                <Redirect from="/user(/*)" to="/user/index"/>
                                <Route path="/product(.category)?(/*)" component={ProductRouter}/>
                                <Route component={ErrorPage}/>
                            </Switch>
                        </AppLayout>
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