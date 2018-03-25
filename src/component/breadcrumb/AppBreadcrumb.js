import React from 'react';
import {Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class AppBreadcrumb extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>商品</Breadcrumb.Item>
                <Breadcrumb.Item>商品管理</Breadcrumb.Item>
            </Breadcrumb>
        );
    };
}
export default AppBreadcrumb;