import React from "react";

function Card(props)
{
    return (
        <div class="m-4 min-w-min bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="/article">
                <img class="rounded-t-lg" src={props.headerImage} alt=""></img>
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.taskTitle}
                    </h5>
                </a>
            </div>
        </div>

    );
}

export default Card