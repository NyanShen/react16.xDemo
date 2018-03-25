import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
const {SubMenu} = Menu;
const {Sider} = Layout;

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Sider width={250} style={{background: '#fff'}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%'}}>

                    <Menu.Item key="0">
                        <Link to="/login">
                            <Icon type="home" />首页
                        </Link>
                    </Menu.Item>

                    <SubMenu key="sub1" title={<span><Icon type="laptop"/>主导航</span>}>
                        <Menu.Item key="1">
                            <Link to="/antForm">表单form</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/antTable">表格table</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/login">首页</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="save"/>商品</span>}>
                        <Menu.Item key="6">商品管理</Menu.Item>
                        <Menu.Item key="7">品类管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="shopping-cart"/>订单</span>}>
                        <Menu.Item key="8">订单管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="user"/>用户</span>}>
                        <Menu.Item key="9">用户管理</Menu.Item>
                    </SubMenu>

                </Menu>
            </Sider>
        );
    };
}
export default SideBar;