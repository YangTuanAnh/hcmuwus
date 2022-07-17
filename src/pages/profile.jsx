import React from "react";
import Assistant from "../components/Assistant/Assistant";
import CardMemory from "../components/Card/CardMemory";
import CardProfile from "../components/Card/CardProfile";

function Profile()
{
    return (
        <section class="lg:p-20 p-8 pb-16">
            <CardProfile
                headerImage=""
                name="Tony Stark"
                caption="I'm Iron Man."
                avatar="https://assets.puzzlefactory.pl/puzzle/387/881/original.jpg"
            />
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
            <h2 class="text-3xl font-bold py-4 border-b border-gray-300">
                Trợ Lý
            </h2>
            <Assistant />
        </section>
    )
}

export default Profile