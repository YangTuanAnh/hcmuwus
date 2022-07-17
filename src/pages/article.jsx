import React from "react";
import CardComment from "../components/Card/CardComment";
import Wishes from "../data/wishes.json"
import { useParams } from "react-router-dom"

function Article()
{
    const props = Wishes[useParams().id]
    return (
        <section class="lg:p-20 mb-32 p-8">
            <img
                src={props.headerImage}
                alt={props.taskTitle}
                class="m-auto lg:max-h-80 lg:w-fit sm:w-full rounded shadow-lg"
            />
            <div class="m-8">
                <h2 class="text-3xl font-bold pb-4 border-b border-gray-300">
                    {props.taskTitle}
                </h2>
                <span class="text-thin italic text-gray-500">0.5k đã làm được điều này</span>
                <p class="mt-4">{props.caption}</p>
            </div>

            <div class="m-8">
                <h2 class="text-2xl font-bold pb-4 border-b border-gray-300 text-blue-700">
                    Chia sẻ từ cộng đồng
                </h2>
                <CardComment
                    avatar="https://kenh14cdn.com/thumb_w/660/2017/photo-1-1500885523722.jpg"
                    name="Peter Parker"
                    caption="Cháu nhận được rồi"
                    album={[
                        "https://m.media-amazon.com/images/I/61+Y4gbK09L._AC_UY1000_.jpg",
                        "https://i.ytimg.com/vi/zIJ8Y64ieaQ/maxresdefault.jpg"
                    ]}
                />
            </div>
        </section>
    )
}

export default Article