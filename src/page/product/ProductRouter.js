import React        from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import ProductList from 'page/product/list/ProductList';
import ProductAdd from 'page/product/add/ProductAdd';
import ProductSave from 'page/product/save/ProductSave';
import ProductDetail from 'page/product/detail/ProductDetail';
import ProductCategory from 'page/product/category/ProductCategory';
import ProductCategoryAdd from 'page/product/category/ProductCategoryAdd';

class ProductRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route path="/product/index" component={ProductList}/>
                <Route path="/product/add" component={ProductAdd}/>
                <Route path="/product/save/:pId?" component={ProductSave}/>
                <Route path="/product/detail/:pId" component={ProductDetail}/>
                <Route path="/product.category/index(/:categoryId)?" component={ProductCategory}/>
                <Route path="/product.category/add" component={ProductCategoryAdd}/>
                <Redirect from="/product(/*)?" to='/product/index'/>
                <Redirect from="/product.category(/*)?" to='/product.category/index'/>
            </Switch>
        );
    }
}

export default ProductRouter;