import icon from "../media/Icon.png";
import Ellipse from "../media/Ellipse.png";
import {  LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, message } from "antd";


function Verify() {
    return (

        <Form name="verify" className="verify-form" >
            <div class="parent">
                <img src={Ellipse} className="login-base-logo" alt="ellispse1" />
                <div class="child">
                    <img src={icon} className="Icon-head-logo" alt="Icon" />

                </div>
            </div>

            <Form.Item
                name="verify"
                rules={[
                    {
                        required: true,
                        message: "Please enter your confirmation code!"
                    }
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="confirmation code"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="verify-form-button">
                    Submit!
                </Button>
                {/*Or <Link to="/register">register now!</Link>*/}
            </Form.Item>
        </Form>
    );
}
export default Verify;