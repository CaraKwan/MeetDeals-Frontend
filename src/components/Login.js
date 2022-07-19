import icon from "../media/Icon.png";
import Ellipse from "../media/Ellipse.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, message } from "antd";
import GoogleLogin from "../Messenger/GoogleLogin";
import axios from "axios";





function Login(props) {
    const { handleLoggedIn } = props;

    const onFinish = (values) => {
        const { username, password } = values;
        const opt = {
            method: "POST",
            // url: `${BASE_URL}/signin`,
            data: {
                username: username,
                password: password
            },
            headers: { "Content-Type": "application/json" }
        };
        axios(opt)
            .then((res) => {
                if (res.status === 200) {
                    const { data } = res;
                    handleLoggedIn(data);
                    message.success("Login succeed! ");
                }
            })
            .catch((err) => {
                console.log("login failed: ", err.message);
                message.error("Login failed!");
            });
    };
    return (
        <div>



            <Form name="normal_login" className="login-form" >
                <div class="parent">
                    <img src={Ellipse} className="login-base-logo" alt="ellispse1" />
                    <div class="child">
                        <img src={icon} className="Icon-head-logo" alt="Icon" />

                    </div>
                </div>

            </Form>

            <GoogleLogin />
        </div>
    );
}
export default Login;



