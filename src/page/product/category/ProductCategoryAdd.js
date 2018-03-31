import React from 'react';

import AppBreadcrumb from "component/breadcrumb/AppBreadcrumb";

class ProductCategoryAdd extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login">
                <AppBreadcrumb menu="商品" submenu="品类管理" pageTitle="品类添加"/>
                <h1 className="text-center">品类添加</h1>
            </div>
        );
    };
}
export default ProductCategoryAdd;