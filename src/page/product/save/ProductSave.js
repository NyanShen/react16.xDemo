import React from 'react';
import {toastr} from "react-redux-toastr";

import AppBreadcrumb from "component/breadcrumb/AppBreadcrumb";
import PageTitle from "component/page-title/PageTitle";
import ProductService from "service/ProductService";
import FileUploader from "component/file-uploader/FileUploader";

import "./index.scss";

const _productService = new ProductService();
const accepts = "image/jpg,image/jpeg,image/png,image/bmp";
class ProductSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.pId,
            firstCategoryList: [],
            firstCategoryId: '',
            secondCategoryList: [],
            secondCategoryId: '',
            name: '',
            subtitle: '',
            subImages: [],
            price: '',
            stock: '',
            detail: '',
            status: ''
        }
    }

    componentDidMount() {
        this.loadFirstCategory();
    }

    // 编辑的时候，需要初始化商品信息
    loadProduct() {
        // 有id参数时，读取商品信息
        if (this.state.id) {
            // 查询一级品类时，不传id
            _productService.getProduct(this.state.id).then(res => {
                let product = this.productAdapter(res);
                this.setState(product);
                // 有二级分类时，load二级列表
                if (product.firstCategoryId) {
                    this.loadSecondCategory();
                }
                this.refs['rich-editor'].setValue(product.detail);
            });
        }
    }

    // 适配接口返回的数据
    productAdapter(product) {
        // 如果父品类是0（根品类），则categoryId作为一级品类
        let firstCategoryId = product.parentCategoryId === 0 ? product.categoryId : product.parentCategoryId,
            secondCategoryId = product.parentCategoryId === 0 ? '' : product.categoryId;
        return {
            categoryId: product.categoryId,
            name: product.name,
            subtitle: product.subtitle,
            subImages: product.subImages.split(','),
            detail: product.detail,
            price: product.price,
            stock: product.stock,
            firstCategoryId: firstCategoryId,
            secondCategoryId: secondCategoryId,
            status: product.status
        }
    }

    loadFirstCategory() {
        _productService.getCategory().then(res => {
            this.setState({
                firstCategoryList: res
            });
        })
    }

    loadSecondCategory() {
        if (!this.state.firstCategoryId) {
            return;
        }
        _productService.getCategory(this.state.firstCategoryId).then(res => {
            this.setState({
                secondCategoryList: res
            });
        })
    }

    // 一级品类变化
    onFirstCategoryChange(e) {
        let newValue = e.target.value || 0;
        // 更新一级选中值，并清除二级选中值
        this.setState({
            firstCategoryId: newValue,
            secondCategoryId: 0,
            secondCategoryList: []
        }, () => {
            // 更新二级品类列表
            this.loadSecondCategory();
        });
    }

    // 二级品类变化
    onSecondCategoryChange(e) {
        let newValue = e.target.value;
        // 更新二级选中值
        this.setState({
            secondCategoryId: newValue
        });
    }

    onUploadChange(data) {
        console.info(data)
    }

    // 普通字段更新
    onValueChange(e) {
        let name = e.target.name,
            value = e.target.value;
        // 更改state
        this.setState({
            [name]: e.target.value
        });
    }

    checkProduct(product) {
        let result = {
            status: true,
            msg: '验证通过'
        };
        if (!product.name) {
            result = {
                status: false,
                msg: '请输入商品名称'
            }
        }
        if (!product.subtitle) {
            result = {
                status: false,
                msg: '请输入商品描述'
            }
        }
        if (!product.price) {
            result = {
                status: false,
                msg: '请输入商品价格'
            }
        }
        return result;
    }

    onSubmit(e) {
        e.preventDefault();
        let product = {
            categoryId: this.state.secondCategoryId || this.state.firstCategoryId || 0,
            name: this.state.name,
            subtitle: this.state.subtitle,
            subImages: this.state.subImages.join(','),
            detail: this.state.detail,
            price: this.state.price,
            stock: this.state.stock,
            status: this.state.status || 1 // 状态为正常
        };
        console.info(product);
        let checkProduct = this.checkProduct(product);
        // 当为编辑时，添加id字段
        if (this.state.id) {
            product.id = this.state.id;
        }
        // 验证通过后，提交商品信息
        if (checkProduct.status) {
            // 保存product
            _productService.saveProduct(product)
                .then(() => {
                    toastr.success("商品保存成功");
                    window.location.href = '/#/product/index';
                });
        } else {
            toastr.error(checkProduct.msg);
        }
        return false;
    }

    render() {
        return (
            <div className="page-wrapper">
                <AppBreadcrumb menu="商品" submenu="商品管理" pageTite="商品添加"/>
                <PageTitle pageTitle="商品添加"/>
                <div className="row">
                    <div className="form-wrap col-md-12">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="name" className="col-md-2 control-label">商品名称</label>
                                <div className="col-md-3">
                                    <input type="text"
                                           className="form-control"
                                           name="name"
                                           id="name"
                                           placeholder="请输入商品名称"
                                           value={this.state.name}
                                           onChange={(e) => this.onValueChange(e)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subtitle" className="col-md-2 control-label">商品描述</label>
                                <div className="col-md-3">
                                    <input type="text"
                                           className="form-control"
                                           name="subtitle"
                                           id="subtitle"
                                           placeholder="请输入商品描述"
                                           value={this.state.subtitle}
                                           onChange={(e) => this.onValueChange(e)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="category" className="col-md-2 control-label">所属分类</label>
                                <div className="col-md-6">
                                    <select type="password" className="form-control cate-select col-md-3"
                                            value={this.state.firstCategoryId}
                                            onChange={(e) => this.onFirstCategoryChange(e)}>
                                        <option value="">请选择一级品类</option>
                                        {
                                            this.state.firstCategoryList.map((category, index) => {
                                                return (
                                                    <option value={category.id} key={index}>{category.name}</option>
                                                );
                                            })
                                        }
                                    </select>
                                    {this.state.secondCategoryList.length ?
                                        <select type="password" className="form-control cate-select col-md-3"
                                                value={this.state.secondCategoryId}
                                                onChange={(e) => this.onSecondCategoryChange(e)}>
                                            <option value="">请选择二级品类</option>
                                            {
                                                this.state.secondCategoryList.map((category, index) => {
                                                    return (
                                                        <option value={category.id} key={index}>{category.name}</option>
                                                    );
                                                })
                                            }
                                        </select> : null
                                    }
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price" className="col-md-2 control-label">商品价格</label>
                                <div className="col-md-3">
                                    <div className="input-group">
                                        <input type="number"
                                               className="form-control"
                                               id="price"
                                               placeholder="价格"
                                               name="price"
                                               value={this.state.price}
                                               onChange={(e) => this.onValueChange(e)}/>
                                        <div className="input-group-addon">元</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="stock" className="col-md-2 control-label">商品库存</label>
                                <div className="col-md-3">
                                    <div className="input-group">
                                        <input type="number"
                                               className="form-control"
                                               id="stock"
                                               name="stock"
                                               placeholder="库存"
                                               value={this.state.stock}
                                               onChange={(e) => this.onValueChange(e)}/>
                                        <div className="input-group-addon">件</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail3" className="col-md-2 control-label">商品图片</label>
                                <div className="col-md-3">
                                    <FileUploader btnName="上传图片" accept={accepts}
                                                  onChange={(res) => this.onUploadChange(res)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail3" className="col-md-2 control-label">商品详情</label>
                                <div className="col-md-10">
                                    <textarea className="form-control text-area" rows={3}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-offset-2 col-md-10">
                                    <button type="btn" className="btn btn-xl btn-primary"
                                            onClick={(e) => this.onSubmit(e)}>提交
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
export default ProductSave;