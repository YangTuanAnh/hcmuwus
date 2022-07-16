import React from "react";

function GreetingBox(props)
{
    if (props.avatar == undefined) {
        return (
            <div class="font-bold text-xl">
                {props.message}
            </div>
        )
    }
    return (
        <div class="flex">
            <div class="flex-1 font-bold text-xl    ">{props.message}</div>
            <div class="auto"><img href={props.avatar}>Avatar</img></div>
        </div>
    )
}

export default GreetingBox