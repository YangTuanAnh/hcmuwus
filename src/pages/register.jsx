// Register Page with the following components: a welcome text, username, email, password, confirm password and confirm button
// Style with tailwindcss.

import React from "react";

class Register extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event)
    {
        event.preventDefault();
        const { username, email, password, confirmPassword } = this.state;
        this.setState({
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
        this.props.onSubmit({ username, email, password, confirmPassword });
    }

    render()
    {
        return (
            <div className="flex flex-col justify-center items-center my-20">
                <h1 className="text-2xl font-bold">
                    Xin chào! Rất vui được gặp bạn
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="flex flex-col justify-center items-center my-20 gap-4">
                        <div className="">
                            <input
                                value={this.state.username}
                                onChange={this.handleChange}
                                name="username"
                                className="w-full p-2.5 border border-gray-400 rounded-lg" type="text" placeholder="Tên đăng nhập" />
                        </div>
                        <div className="">
                            <input
                                value={this.state.email}
                                onChange={this.handleChange}
                                name="email"
                                className="w-full p-2.5 border border-gray-400 rounded-lg" type="text" placeholder="Email" />
                        </div>
                        <div className="">
                            <input
                                value={this.state.password}
                                onChange={this.handleChange}
                                name="password"
                                className="w-full p-2.5 border border-gray-400 rounded-lg" type="password" placeholder="Mật khẩu" />
                        </div>
                        <div className="">
                            <input
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                                name="confirmPassword"
                                className="w-full p-2.5 border border-gray-400 rounded-lg" type="password" placeholder="Xác nhận mật khẩu" />
                        </div>
                        <button type="submit" className="text-center w-48 text-gray-400 border border-gray-400 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                            Đăng ký
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;