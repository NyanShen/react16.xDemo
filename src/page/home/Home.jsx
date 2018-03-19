import React from 'react';
import PageTitle from "component/page-title/PageTitle";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle pageTitle="首页"/>
                <div>welcome home</div>
            </div>
        );
    };
}
export default Home