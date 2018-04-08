import React from 'react';
import {Link} from "react-router-dom";

import AppBreadcrumb from "component/breadcrumb/AppBreadcrumb";
import PageTitle from "component/page-title/PageTitle";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login">
                <AppBreadcrumb menu="商品" submenu="商品管理" pageTitle="商品列表"/>
                <PageTitle pageTitle="商品列表">
                    <div className="page-title-right">
                        <Link to="/product/save" className="btn btn-primary">
                            <i className="fa fa-plus"/>
                            <span>添加商品</span>
                        </Link>
                    </div>
                </PageTitle>
            </div>
        );
    };
}
export default ProductList;