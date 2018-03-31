import React from 'react';
import {Table} from "antd";

import AppBreadcrumb from "component/breadcrumb/AppBreadcrumb";

const columns = [
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '注册时间',
        dataIndex: 'createTime',
        key: 'createTime',
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    }
];
const dataSource = {
    "content": [
        {
            key: '1',
            username: '胡彦斌',
            email: 'hu@126.com',
            phone: '13423245667',
            createTime: '2018-03-13',
            address: '西湖区湖底公园1号'
        },
        {
            key: '2',
            username: '胡彦祖',
            email: 'yan@126.com',
            phone: '13634324579',
            createTime: '3018-03-30',
            address: '西湖区湖底公园4号'
        }
    ],
    "page": 1,
    "totalPage": 1,
    "totalElements": 2
};
class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-list">
                <AppBreadcrumb menu="用户" submenu="用户管理"/>
                <h1 className="text-center">用户列表</h1>
                <div className="user-table">
                    <Table
                        pagination={false}
                        columns={columns}
                        dataSource={dataSource.content}/>
                </div>
            </div>
        );
    }
}
export default User;