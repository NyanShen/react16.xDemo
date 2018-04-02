import React from 'react';

import AppBreadcrumb from "component/breadcrumb/AppBreadcrumb";

class AntTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login">
                <AppBreadcrumb menu="主导航" submenu="表格table"/>
                <h1 className="text-center">ant table page</h1>
            </div>
        );
    };
}
export default AntTable;