import React from "react";

// Create compoenent HintBox which has a title and a group of four buttons. Each button contain a svg file and a text with rounded border
// Style with tailwindcss.

function Hint(props) {
    return (
        <div type="button" href={props.href}
            className="mx-4 w-full lg:w-fit text-gray-400 border border-purple-400 hover:bg-blue-700 hover:text-white font-medium rounded-2xl text-sm p-2.5 border-2">
        <div className="flex flex-row items-center gap-4">
            <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns={props.icon}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-left text-stone-700">
                {props.text}                
            </p>
            <span className="sr-only">Icon description</span>
        </div>
        </div>
    )
}

class HintBox extends React.Component {
    render() {
        return (
            <section>
                <h1 className="px-4 text-2xl font-bold italic">
                    Bạn muốn được giúp đỡ:
                </h1>
                <div className="flex flex-row flex-wrap content-center align-center items-center justify-center my-4 gap-4">
                <Hint 
                    text="Tôi muốn thực hiện hóa ước nguyện"
                    icon="http://www.w3.org/2000/svg"
                    href="#" />
                <Hint
                    text="Gửi lời yêu thương cho gió"
                    icon="http://www.w3.org/2000/svg"
                    href="#" />
                <Hint
                    text="Từ chuyên gia, cơ quan chức năng"
                    icon="http://www.w3.org/2000/svg"
                    href="#" />
                <Hint
                    text="Chuẩn bị hậu sự cho bản thân"
                    icon="http://www.w3.org/2000/svg"
                    href="#" />
                </div>
            </section>

        );
    }
}

export default HintBox;