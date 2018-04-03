import React from 'react';
import {Form, Input, Button} from 'antd';

import AppBreadcrumb from "component/breadcrumb/AppBreadcrumb";

const FormItem = Form.Item;

// formItem css 样式
const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 6},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
    }
};

// 保存按钮 css 样式
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 14,
            offset: 6,
        },
    }
};

// form css 样式
const formLayout = {
    width: 600,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto'
};

class ProductAddForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <AppBreadcrumb menu="商品" submenu="商品添加"/>
                <h1 className="text-center">商品添加</h1>
                <Form onSubmit={this.handleSubmit} style={formLayout}>
                    <FormItem label="商品名称:" {...formItemLayout}>
                        {
                            getFieldDecorator('productName',{
                                rules: [{
                                    required: true,
                                    message: "请输入商品名称"
                                }],
                            })(<Input/>)
                        }
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            保存
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    };
}

const ProductAdd = Form.create()(ProductAddForm);

export default ProductAdd;