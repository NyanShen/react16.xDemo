import React from 'react';

import AppBreadcrumb from "component/breadcrumb/AppBreadcrumb";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login">
                <AppBreadcrumb menu="商品" submenu="商品管理" pageTite="商品详情"/>
                <h1 className="text-center">商品详情</h1>
            </div>
        );
    };
}
export default ProductDetail;