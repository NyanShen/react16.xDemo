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

    render() {
        return (
            <Header className="header app-header">
                <a className="logo" href="#/"><b>HAPPY </b>MMALL</a>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}}>
                    <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">商品</Menu.Item>
                    <Menu.Item key="3">订单</Menu.Item>
                    <Menu.Item key="4">用户</Menu.Item>
                </Menu>
            </Header>
        );
    };
}
export default AppHeader;