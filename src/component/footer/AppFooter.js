import React from 'react';
import {Layout} from 'antd';
const {Footer} = Layout;

class AppFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Nyan Design ©2018 Created by Nyan UED
            </Footer>
        );
    };
}
export default AppFooter;