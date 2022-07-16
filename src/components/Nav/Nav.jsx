import React from "react";

function Nav()
{
    return (
        <nav class="p-4 border-2 border-inherit shadow-lg font-light flex">
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