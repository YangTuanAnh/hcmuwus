import React from "react";

function HelpButton(props)
{
    return (
        <a href={props.link || "#"}>

            <div class="shadow-lg rounded-md m-8 p-4 content-center hover:bg-slate-200">

                <div class="flex space gap-4">
                    <div style={{ "max-width": "4em" }} class="">
                        <img class="rounded-md" src={props.imageLink}></img>
                    </div>
                    <div class="flex flex-col justify-center">
                        <div class="font-bold text-lg">{props.name}</div>
                        <div class="flex-0 text-sm">
                            {props.description}
                        </div>
                    </div>
                </div>

            </div>

        </a>
    );
}

export default HelpButton