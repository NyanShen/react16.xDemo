import React from 'react';
import {Icon} from "antd";

import MenuUtil from "util/menuUtil";
import AppBreadcrumb from "component/breadcrumb/AppBreadcrumb";
const _menuUtil = new MenuUtil();
const menus = [
    {
        "id": "0010",
        "fatherId": "0000",
        "name": "商品",
        "path": "/auction/sell",
        "childItems": [
            {
                "id": "0011",
                "fatherId": "0010",
                "name": "竞拍商品",
                "path": "/auction/sell/product-list",
                "childItems": []
            },
            {
                "id": "0012",
                "fatherId": "0010",
                "name": "成交商品",
                "path": "/auction/sell/product-success",
                "childItems": []
            },
            {
                "id": "0013",
                "fatherId": "0010",
                "name": "新增商品",
                "path": "/auction/sell/product-add",
                "childItems": []
            },
            {
                "id": "0014",
                "fatherId": "0010",
                "name": "最新商品",
                "path": "/auction/sell/product-latest",
                "childItems": []
            }
        ]
    }
];
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myMenus: menus,
            currentPath: '/auction/sell/product-list'
        }
    }

    componentDidMount() {
        const defaultItem = _menuUtil.getDefaultItem(this.state.myMenus, this.state.currentPath);
        _menuUtil.setActiveNavItem(this.state.myMenus, defaultItem, this.props);
        _menuUtil.openItem(defaultItem);
        if (_menuUtil.hasChildItem(defaultItem)) {
            _menuUtil.setActiveChildNavItem(this.state.myMenus, defaultItem, this.state.currentPath);
        }
    }

    setActiveChildNavItem(item) {
        _menuUtil.setActiveChildNavItem(this.state.myMenus, item, this.state.currentPath);
        this.forceUpdate();
    }

    setActiveNavItem(item) {
        if (this.hasChildItem(item)) {
            this.clearParentItemsActiveStatus();
        } else {
            this.clearActiveStatusWithChildItems();
            item.active = true;
            if (!!item.path) {
                //this.router.navigate([item.path]);
            }
        }
        this.forceUpdate();
        console.info(item)
    }

    hasChildItem(item) {
        return _menuUtil.hasChildItem(item);
    }

    clearParentItemsActiveStatus() {
        _menuUtil.clearParentItemsActiveStatus(this.state.myMenus);
    }

    clearActiveStatusWithChildItems() {

        _menuUtil.clearActiveStatusWithChildItems(this.state.myMenus);
    }

    openItem(item) {
        _menuUtil.openItem(item);
        this.forceUpdate();
        console.info(item)
    }

    clearActiveItem(menus, activeItem) {
        _menuUtil.clearActiveItem(menus, activeItem);
    }

    render() {
        return (
            <div className="menu">
                <AppBreadcrumb menu="主导航" submenu="动态菜单" pageTite="动态菜单演示"/>
                <h1 className="text-center">menu page</h1>
                <aside>
                    <ul className="list-unstyled menu">
                        {
                            this.state.myMenus.map((navItem, index) => {
                                return (
                                    <li key={'menu_li_' + index} className="nav-item">
                                        <span key={'menu_span_' + index} className="item-name nav-item-content"
                                              onClick={() => {
                                                  this.setActiveNavItem(navItem);
                                                  this.openItem(navItem)
                                              }}>
                                            <Icon type={navItem.isOpen ? 'caret-down' : 'caret-right'}/>
                                            {navItem.name}
                                        </span>

                                        {
                                            navItem.isOpen ?
                                                <ul key={'menu_lu_' + index} className="list-unstyled sub-menu">
                                                    {navItem.childItems.map((childItem, childIndex) => {
                                                        return (
                                                            <li key={'submenu_li_' + childIndex}
                                                                className="child-nav-item"
                                                                onClick={() => this.setActiveChildNavItem(childItem)}>
                                                                <a key={'submenu_a_' + childIndex} className="item-name"
                                                                   onClick={() => this.setActiveNavItem(childItem)}>
                                                                    {childItem.name}
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul> : null
                                        }


                                    </li>
                                )
                            })
                        }
                    </ul>
                </aside>
            </div>
        );
    };
}
export default Login