// A welcome page with a logo, a welcome message, 1 button for login and 1 button for register.
// Style with tailwindcss.

import React from "react";
class Welcome extends React.Component {
    render() {
        return (
            <div class="flex flex-col justify-center items-center my-20">
                <div class="w-full max-w-xs">
                    <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" class="w-full h-auto rounded-lg shadow-lg" alt="Sunset in the mountains" />
                </div>
                <div>
                    <h1 class="text-center text-2xl font-bold mb-4">
                        Welcome to HCMUwUS' App
                    </h1>
                    <div class="flex flex-col items-center justify-center gap-4">
                        <button type="button" class="text-center w-48 text-gray-400 border border-gray-400 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                            Đăng nhập
                        </button>
                        <button type="button" class="text-center w-48 text-gray-400 border border-gray-400 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;