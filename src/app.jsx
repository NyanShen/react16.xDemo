/**
 * Created by Administrator on 2018/3/10 0010.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Home from "page/home/Home.jsx";

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import 'styles/main.scss';

class App extends React.Component {
    render() {
        return (
            <Home />
        );
    };
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);