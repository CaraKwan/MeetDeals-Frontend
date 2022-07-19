import icon from "../media/Icon.png";
import Ellipse from "../media/Ellipse.png";
import email from "../media/email-outline.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, message } from "antd";


function Register() {
    return (
        <Form name="register_login" className="register-form" >
            <div class="parent">
                <img src={Ellipse} className="login-base-logo" alt="ellispse1" />
                <div class="child">
                    <img src={icon} className="Icon-head-logo" alt="Icon" />

                </div>
            </div>

            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: "Please input your Username!"
                    }
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Please input a valid email!"
                    }
                ]}
            >
                <Input
                    prefix={<img src={email} className="email" alt="email" /> }
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your Password!"
                    }
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item
                name="confirm password"
                rules={[
                    {
                        required: true,
                        message: "Please confirm your password!"
                    }
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Confirm Password"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    submit!
                </Button>
                {/*Or <Link to="/register">register now!</Link>*/}
            </Form.Item>
        </Form>
    );
}
export default Register;