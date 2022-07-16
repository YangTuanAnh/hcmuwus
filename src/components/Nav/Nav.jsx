import React from "react";

function Nav()
{
    return (
        <nav class="w-full h-16 bg-white p-4 fixed lg:top-0 bottom-0 shadow-lg flex border-t border-gray-100">
            <h1 class="font-bold text-xl mr-8">
                Pacificae
            </h1>
            <div class="flex text-base">
                <a href="/">
                    Home
                </a>
            </div>
        </nav>
    )
}

export default Nav