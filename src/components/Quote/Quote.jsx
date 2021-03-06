import React from "react";

function Quote(props)
{
    return (
        <div class="bg-cyan-500 rounded-xl p-4 content-center m-4">

            <div class="flex space gap-4">
                <img class="rounded-lg ring-2 ring-gray-300 p-1 w-20 h-20 object-cover" src={props.imageSrc} />

                <div class="flex flex-col justify-center">
                    <div class="text-white font-bold">{props.author}</div>
                    <div class="text-white flex-0">
                        {props.message}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Quote