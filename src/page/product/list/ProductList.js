import React from 'react';

import AppBreadcrumb from "component/breadcrumb/AppBreadcrumb";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login">
                <AppBreadcrumb menu="商品" submenu="商品管理" pageTitle="商品列表"/>
                <h1 className="text-center">商品列表</h1>
            </div>
        );
    };
}
export default ProductList;