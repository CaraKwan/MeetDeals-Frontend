import React, { Component, createRef } from "react";
import { Modal, Button, message } from "antd";
import '../styles/UploadForm.css'
import UploadForm  from "./UploadForm";


class UploadButton extends Component {
    state = {
        visible: false,
        confirmLoading: false
    };

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = () => {
        this.setState({
            confirmLoading: true
        });

    };

    handleCancel = () => {
        console.log("Clicked cancel button");
        this.setState({
            visible: false
        });
    };

    render() {
        const { visible, confirmLoading } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Create New Post
                </Button>
                <Modal
                    title="Upload and Sell!"
                    visible={visible}
                    onOk={this.handleOk}
                    okText="Create"
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <UploadForm  />
                </Modal>
            </div>
        );
    }
}

export default UploadButton;