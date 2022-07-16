import React from "react";

function GreetingBox(props)
{
    if (props.avatar == undefined)
    {
        return (
            <div class="font-bold text-xl mx-8 my-4">
                {props.message}
            </div>
        )
    }
    return (
        <div class="flex m-4">
            <div class="flex-1 font-bold text-5xl">{props.message}</div>
            <img class="auto rounded-lg ring-2 ring-gray-300 p-1 w-20 h-20 object-cover" src={props.avatar} />
        </div>
    )
}

export default GreetingBox