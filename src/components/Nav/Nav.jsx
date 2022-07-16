import React from "react";

function Nav()
{
    return (
        <nav class="flex items-center justify-between flex-wrap p-4 fixed w-full z-50 shadow-lg bg-white lg:top-0 bottom-0 h-16">
            <a href="/">
                <img src="images/logo.svg" class="h-10" />
            </a>
            <div class="flex text-base gap-8">
                <a href="/">
                    Trang Chủ
                </a>
                <a href="#/lastwords">
                    Lời Gửi Gió
                </a>
                <a href="/help">
                    Trợ Giúp
                </a>
                <a href="/profile">
                    Trang Cá Nhân
                </a>
            </div>
        </nav>
    )
}

export default Nav