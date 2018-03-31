import React from 'react';

import AppBreadcrumb from "component/breadcrumb/AppBreadcrumb";

class ProductCategory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login">
                <AppBreadcrumb menu="商品" submenu="品类管理"/>
                <h1 className="text-center">品类管理</h1>
            </div>
        );
    };
}
export default ProductCategory;