import React from "react";
import Assistant from "../components/Assistant/Assistant";
import CardMemory from "../components/Card/CardMemory";
import CardProfile from "../components/Card/CardProfile";
import Card from "../components/Card/Card";
import Wishes from "../data/wishes.json"
import CardAudio from "../components/Card/CardAudio";

function Profile()
{
    return (
        <section class="lg:p-20 p-8 mb-32">
            <CardProfile
                headerImage=""
                name="Tony Stark"
                caption="I'm Iron Man."
                avatar="https://assets.puzzlefactory.pl/puzzle/387/881/original.jpg"
            />
            <h2 class="text-3xl font-bold py-4 border-b border-gray-300 ">
                Nguyện vọng
            </h2>
            <div class="grid lg:grid-cols-4 grid-cols-2">
                {
                    Wishes.map((task, index) =>
                    {
                        return (
                            <Card
                                taskTitle={task.taskTitle}
                                headerImage={task.headerImage}
                                id={index}
                            />
                        )
                    })
                }
            </div>
            <h2 class="text-3xl font-bold py-4 border-b border-gray-300 ">
                Di Vật
            </h2>
            <CardMemory
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
            <CardAudio
                caption="I love you 3000"
                date="26/03/2019"
                day="Thứ 7"
            />
            <h2 class="text-3xl font-bold py-4 border-b border-gray-300">
                Trợ Lý
            </h2>
            <Assistant />
        </section>
    )
}

export default Profile