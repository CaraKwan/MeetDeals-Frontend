import React, { forwardRef } from "react";
import { Form, Upload, Input } from "antd";
import { Menu, Dropdown, Button, message, Space, } from 'antd';
import { InboxOutlined } from "@ant-design/icons";
import { DownOutlined,  } from '@ant-design/icons';
import { Select } from 'antd';

 const UploadForm = forwardRef((props, formRef) =>{

    const { Option } = Select;
    const normFile = (e) => {
        console.log("Upload event:", e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    function handleChange(value) {
        console.log(`selected ${value}`);
    }


    return (
        <Form name="upload" >
            <Form.Item
                name="name"
                label="Name of the Item"
                rules={[
                    {
                        required: true,
                        message: "Please input the name of the item!"
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="price"
                label="Price"
                rules={[
                    {
                        required: true,
                        message: "Please input the price of the item!"
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item label="UploadPic">
                <Form.Item
                    name="uploadPost"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle
                    rules={[
                        {
                            required: true,
                            message: "Please select an image/video!"
                        }
                    ]}
                >
                    <Upload.Dragger name="files" beforeUpload={() => false}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                            Click or drag file to this area to upload
                        </p>
                    </Upload.Dragger>

                    <Select defaultValue="Electronic" style={{ width: 120 }} className='categoryMenu' onChange={handleChange}>
                        <Option value={0}>Electronic</Option>
                        <Option value={1}>Books</Option>
                        <Option value={2}>Clothing</Option>
                        <Option value={2}>Furniture</Option>
                    </Select>

                    <Select defaultValue="New" style={{ width: 120 }} className='ConditionMenu' onChange={handleChange}>
                        <Option value={0}>New</Option>
                        <Option value={1}>Used</Option>
                        <Option value={2}>Good Conditions</Option>

                    </Select>
                </Form.Item>
            </Form.Item>
            <Form.Item
                name="zipcode"
                label="Zipcode"
                rules={[
                    {
                        required: true,
                        message: "Please input the Zipcode of your location!"
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="description"
                label="Item Description"
                rules={[
                    {
                        required: true,
                        message: "Please input the item description!"
                    }
                ]}
            >
                <Input />
            </Form.Item>
        </Form>



    );
});

export default UploadForm