import React from 'react';

import NavSide from "component/nav-side/NavSide";
import './index.scss';
import './theme.scss';
import NavTop from "../../component/nav-top/NavTop";

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="wrapper">
                <NavTop />
                <NavSide />
                {this.props.children}
            </div>
        );
    };
}
export default Layout
