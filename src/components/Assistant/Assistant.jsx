import React from "react";

function Assistant()
{
    const items = [
        {
            "icon": "https://img.icons8.com/material-outlined/344/person-male.png",
            "name": "Thông tin cá nhân"
        },
        {
            "icon": "https://img.icons8.com/material-outlined/344/cottage.png",
            "name": "Nhà cửa tài sản"
        },
        {
            "icon": "https://img.icons8.com/material-outlined/344/cheap-2.png",
            "name": "Kinh tế"
        },
        {
            "icon": "https://img.icons8.com/ios/344/law.png",
            "name": "Luật pháp"
        },
        {
            "icon": "https://img.icons8.com/pastel-glyph/344/first-aid-kit.png",
            "name": "Y tế"
        },
        {
            "icon": "https://img.icons8.com/ios/344/family--v1.png",
            "name": "Gia đình và người thân"
        },
        {
            "icon": "https://img.icons8.com/external-tal-revivo-regular-tal-revivo/344/external-hourglass-antique-stopwatch-timer-measurement-sandclock-device-date-regular-tal-revivo.png",
            "name": "Già đi"
        },
        {
            "icon": "https://img.icons8.com/ios-glyphs/344/occupied-bed.png",
            "name": "Hậu sự"
        },
        {
            "icon": "https://img.icons8.com/windows/344/coniferous-tree.png",
            "name": "Sau khi tôi ra đi"
        }
    ]
    return (
        <section class="m-4 p-4 rounded-lg shadow-lg">
            {
                items.map((item, index) =>
                {
                    return (
                        <div class="rounded-lg shadow-lg flex p-4 hover:bg-gray-100 my-4">
                            <img class="h-10 object-cover" src={item.icon} alt={item.name} />
                            <p class="flex-1 text-xl p-2">{item.name}</p>
                            <img class="flex-8 float-right mt-4 h-4 object-cover" src="https://img.icons8.com/fluency-systems-filled/344/dots-loading.png" />
                        </div>
                    )
                })
            }

        </section>
    )
}

export default Assistant