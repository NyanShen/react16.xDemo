/**
 * Created by Administrator on 2018/3/10 0010.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AppLayout from "page/layout/AppLayout.jsx";
import Home from "page/home/Home.jsx";
import Login from "page/login/Login.jsx";
import AntTable from "page/ant-table/AntTable.jsx";
import ErrorPage from "page/error-page/ErrorPage.jsx";

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