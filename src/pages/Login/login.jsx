import React, {Component} from "react"
import loginIcon from "./images/loginIcon.jpg"
import "./css/login.less"
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

const {Item} = Form
const {Password} = Input

export default class Login extends Component {

    //提交数据
    onFinish = (values) => {
        // TODO...
        console.log('Received values of form: ', values);
    };


    render() {
        return (
            <div className="container">
                <div className="style-container">
                    <img src={loginIcon} alt="author：cumin"/>
                    <h1>商品管理系统</h1>
                </div>

                <div className="login-container">
                    <h1>用户登录</h1>

                    <Form name="normal_login" onFinish={this.onFinish} className="login-form"
                          initialValues={{remember: true}}>

                        {/*用户名*/}
                        <Item name="username" rules={
                            [
                                {required: true, message: '必须输入用户名'},
                                {min: 4, message: '用户名最小四位'},
                                {max: 12, message: '用户名最大十二位'},
                                {pattern: /^\w+$/, message: '只能由英文、数字、下划线组成'},
                            ]
                        }>
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                        </Item>

                        {/*密码*/}
                        <Item name="password" rules={
                            [
                                {required: true, message: '必须输入密码'},
                                {min: 4, message: '密码最小四位'},
                                {max: 12, message: '密码最大十二位'},
                                {pattern: /^\w+$/, message: '只能由英文、数字、下划线组成'},
                            ]
                        }>
                            <Password prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="Password"/>
                        </Item>

                        {/*登录按钮*/}
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">Login</Button>
                        </Item>

                    </Form>
                </div>
            </div>
        )
    }
}