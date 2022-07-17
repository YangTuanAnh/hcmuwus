import React from "react";
import Wishes from "../../data/wishes.json"

function Card(props)
{
    return (
        <div class="m-4 min-w-min bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href={`/article/${props.id}`}>
                <img class="rounded-t-lg w-full aspect-square object-cover" src={props.headerImage} alt=""></img>
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 lg:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.taskTitle}
                    </h5>
                </a>
            </div>
        </div>

    );
}

export default Card