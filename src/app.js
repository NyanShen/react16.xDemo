import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider, connect} from "react-redux";
import ReduxToastr from "react-redux-toastr";
import store from "reduxModel/store";

import AppLayout from "page/layout/AppLayout";
import Home from "page/home/Home";
import Login from "page/login/Login";
import AntTable from "page/ant-table/AntTable";
import ErrorPage from "page/error-page/ErrorPage";
import AntForm from "page/ant-form/AntForm";
import DynamicMenu from "page/dynamic-menu/DynamicMenu";
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
            <Provider store={store}>
                <section>
                    <Router>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/" render={() => (
                                <AppLayout>
                                    <Switch>
                                        <Route path="/" exact component={Home}/>
                                        <Route path="/antTable" exact component={AntTable}/>
                                        <Route path="/antForm" component={AntForm}/>
                                        <Route path="/dynamicMenu" component={DynamicMenu}/>
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
                    <ReduxToastr
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        position="top-center"
                        preventDuplicates
                        newestOnTop={true}
                        timeOut={4000}/>
                </section>
            </Provider>
        );
    };
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);