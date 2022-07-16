import React from "react";

function Quote(props)
{
    return (
        <div class="bg-cyan-800 rounded-md p-4 content-center">
        
        <div class="flex space gap-4">
            <div style={{ "max-width": "12em" }} class="">
                <img class="rounded-md border-slate-300 border-2" src="https://www.jimdo.com/static/788abd633ed9f2088117678a650fc7c4/c76cf/steplist-author.jpg"></img>
            </div>
            <div class="flex flex-col justify-center">
                <div class="text-white font-bold">{props.author}</div>
                <div class="text-white flex-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                </div>
            </div>
        </div>
        
        </div>

    )
}

export default Quote