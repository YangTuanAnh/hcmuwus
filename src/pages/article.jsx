import React from "react";
import CardComment from "../components/Card/CardComment";

function Article(props)
{
    return (
        <section class="lg:p-20 pb-16">
            <img
                src={props.headerImage}
                alt={props.title}
                class="m-auto lg:max-h-80 lg:w-fit sm:w-full rounded shadow-lg"
            />
            <div class="m-8">
                <h2 class="text-3xl font-bold pb-4 border-b border-gray-300">
                    {props.title}
                </h2>
                <span class="text-thin italic text-gray-500">{props.numberOfCompletion} đã làm được điều này</span>
                <p class="mt-4">{props.caption}</p>
            </div>

            <div class="m-8">
                <h2 class="text-2xl font-bold pb-4 border-b border-gray-300 text-blue-700">
                    Chia sẻ từ cộng đồng
                </h2>
                <CardComment
                    avatar="https://www.funfactsabout.com/wp-content/uploads/2021/11/fun-facts-skiing.jpg"
                    name="Nguyễn Văn A"
                    caption="Đi dạo với cháu ngoại ở công viên"
                    album={[
                        "https://www.funfactsabout.com/wp-content/uploads/2021/11/fun-facts-skiing.jpg",
                        "https://www.funfactsabout.com/wp-content/uploads/2021/11/fun-facts-skiing.jpg",
                        "https://www.funfactsabout.com/wp-content/uploads/2021/11/fun-facts-skiing.jpg",
                        "https://www.funfactsabout.com/wp-content/uploads/2021/11/fun-facts-skiing.jpg",
                        "https://www.funfactsabout.com/wp-content/uploads/2021/11/fun-facts-skiing.jpg",
                        "https://www.funfactsabout.com/wp-content/uploads/2021/11/fun-facts-skiing.jpg",
                        "https://www.funfactsabout.com/wp-content/uploads/2021/11/fun-facts-skiing.jpg",
                        "https://www.funfactsabout.com/wp-content/uploads/2021/11/fun-facts-skiing.jpg"
                    ]}
                />
            </div>
        </section>
    )
}

export default Article