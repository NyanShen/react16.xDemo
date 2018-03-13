/**
 * Created by Administrator on 2018/3/10 0010.
 */
import React from 'react';
class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="wrapper">
                {this.props.children}
            </div>
        );
    };
}
export default Layout
