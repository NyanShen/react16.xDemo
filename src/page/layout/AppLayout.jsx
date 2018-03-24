import React from 'react';
import {Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import NavTop from "component/nav-top/NavTop";
import NavSide from "component/nav-side/NavSide";
import './index.scss';
import './theme.scss';
import AppHeader from "component/header/AppHeader";
import AppBreadcrumb from "component/breadcrumb/AppBreadcrumb";
import SideBar from "../../component/sidebar/SideBar";
import AppFooter from "../../component/footer/AppFooter";

class AppLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout className="wrapper">
                <AppHeader />
                <Layout>
                    <SideBar />
                    <Layout>
                        <AppBreadcrumb />
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
