import React from "react";

function Card(props)
{
    return (
        <div class="mx-8 my-4 min-w-min bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""></img>
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