import React from 'react';

class PageTitle extends React.Component {
    render() {
        return (
            <div className="page-header">
                <h1>{this.props.pageTitle}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default PageTitle;