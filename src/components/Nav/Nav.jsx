import React from "react";

function Nav()
{
    return (
        <nav class="flex items-center justify-between flex-wrap p-4 fixed w-full z-50 shadow-lg bg-white lg:top-0 bottom-0 h-16">
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