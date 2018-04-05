import React from 'react';
import {Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import './index.scss';
import AppHeader from "component/header/AppHeader";
import SideBar from "component/sidebar/SideBar";
import AppFooter from "component/footer/AppFooter";

class AppLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout className="layout-wrapper">
                <AppHeader />
                <Layout>
                    <SideBar />
                    <Layout className="layout-body">
                        <Content>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
                <AppFooter />
            </Layout>
        );
    };
}
export default AppLayout
