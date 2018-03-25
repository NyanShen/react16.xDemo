import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
const {SubMenu} = Menu;
import logo from 'images/logo.png';
import './index.scss';

const {Header} = Layout;

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    toHome() {
        this.props.history.push('/login');
    }

    render() {
        return (
            <Header className="header app-header">
                <a className="logo" href="#/"><b>HAPPY </b>MMALL</a>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}}>
                    <Menu.Item key="1" onClick={this.toHome}>首页</Menu.Item>
                    <Menu.Item key="2">主导航</Menu.Item>
                    <Menu.Item key="3">商品</Menu.Item>
                    <Menu.Item key="4">订单</Menu.Item>
                    <Menu.Item key="5">用户</Menu.Item>
                </Menu>
            </Header>
        );
    };
}
export default AppHeader;