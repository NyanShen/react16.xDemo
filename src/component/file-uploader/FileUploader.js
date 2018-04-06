import React from 'react';
import {Upload, Button, Icon} from "antd";

class FileUploader extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const props = {
            action: "/api/files",
            accept: this.props.accept,
            onChange: (res) => {
                this.props.onChange(res)
            }
        };
        return (
            <Upload {...props}>
                <Button type="primary">
                    <Icon type="upload" />{this.props.btnName}
                </Button>
            </Upload>
        )
    };
}

export default FileUploader;