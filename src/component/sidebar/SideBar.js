import React from 'react';
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
                        <Icon type="home" />
                        <span>首页</span>
                    </Menu.Item>

                    <SubMenu key="sub1" title={<span><Icon type="save"/>商品</span>}>
                        <Menu.Item key="1">商品管理</Menu.Item>
                        <Menu.Item key="2">品类管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="shopping-cart"/>订单</span>}>
                        <Menu.Item key="5">订单管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="user"/>用户</span>}>
                        <Menu.Item key="9">用户管理</Menu.Item>
                    </SubMenu>

                </Menu>
            </Sider>
        );
    };
}
export default SideBar;