import React from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

import './index.scss';

class AppPagination extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Pagination {...this.props}/>
        )
    }
}

export default AppPagination;