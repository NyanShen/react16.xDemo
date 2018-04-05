import React from 'react';

class PageTitle extends React.Component {
    render() {
        return (
            <div className="page-header">
                <h3>{this.props.pageTitle}</h3>
                {this.props.children}
            </div>
        );
    }
}

export default PageTitle;