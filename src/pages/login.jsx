// A login page with a logo, username field, password field, 1 button for login and 1 button for register.
// Style with tailwindcss.

import React from "react";

class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username: "",
            password: ""
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
        const { username, password } = this.state;
        this.setState({
            username: "",
            password: ""
        });
        this.props.onSubmit({ username, password });
    }

    render()
    {
        return (
            <div class="flex flex-col justify-center items-center my-20">
                <h1 className="text-2xl font-bold">
                    Chào mừng quay trở lại
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div class="flex flex-col justify-center items-center my-20 gap-4">
                        <div className="">
                            <input
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                className="w-full p-2.5 border border-gray-400 rounded-lg" type="text" placeholder="Tên đăng nhập" />
                        </div>
                        <div className="">
                            <input
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                className="w-full p-2.5 border border-gray-400 rounded-lg" type="password" placeholder="Mật khẩu" />
                        </div>
                        <div>
                            <a href="#" className="">Quên mật khẩu?</a>
                        </div>
                        <button type="submit" class="text-center w-48 text-gray-400 border border-gray-400 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                            Đăng nhập
                        </button>
                        <button type="button" class="text-center w-48 text-gray-400 border border-gray-400 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                            Đăng ký
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;