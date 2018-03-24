import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
const {SubMenu} = Menu;
import './index.scss';

const { Header} = Layout;

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header className="header app-header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        );
    };
}
export default AppHeader;