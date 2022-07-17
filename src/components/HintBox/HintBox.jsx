import React from "react";

// Create compoenent HintBox which has a title and a group of four buttons. Each button contain a svg file and a text with rounded border
// Style with tailwindcss.

function Hint(props)
{
    return (
        <a href={props.href} className="grow w-fill md:w-fit lg:w-fit mx-4">
        <div type="button"
            className="text-stone-700 border border-purple-400 hover:bg-purple-700 hover:text-white font-medium rounded-2xl text-sm p-2.5 border-2">
        <div className="flex flex-row items-center gap-4">
            <img className="w-10 h-10 text-purple-400" src={props.icon} />
            <p className="text-left">
                {props.text}                
            </p>
            <span className="sr-only">Icon description</span>
        </div>
        </div>
        </a>

    )
}

class HintBox extends React.Component
{
    render()
    {
        return (
            <section>
                <h1 className="px-4 text-2xl font-bold italic">
                    Bạn muốn được giúp đỡ:
                </h1>

                <div className="flex flex-row flex-wrap content-center align-center items-center justify-center my-4 gap-4">
                <Hint 
                    text="Tôi muốn hiện thực hóa ước nguyện"
                    icon="/book.svg"
                    href="/" />
                <Hint
                    text="Gửi lời yêu thương cho gió"
                    icon="wind.svg"
                    href="lastwords" />
                <Hint
                    text="Từ chuyên gia, cơ quan chức năng"
                    icon="pill.svg"
                    href="/help" />
                <Hint
                    text="Chuẩn bị hậu sự cho bản thân"
                    icon="user.svg"
                    href="/profile" />
                </div>
            </section>

        );
    }
}

export default HintBox;