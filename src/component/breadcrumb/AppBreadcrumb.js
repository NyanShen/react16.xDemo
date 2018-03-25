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
            <Breadcrumb style={{ margin: '18px 0' }}>
                <Breadcrumb.Item>{this.props.menu}</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">{this.props.submenu}</a></Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.pageTite}</Breadcrumb.Item>
            </Breadcrumb>
        );
    };
}
export default AppBreadcrumb;