import React from "react";

function CardAudio(props)
{
    return (
        <section class="m-4 p-4 w-fill rounded-2xl shadow-lg bg-white">
            <div class="grid grid-cols-2">
                <div>
                    <h3 class="text-lg font-bold m-2">{props.caption}</h3>
                    <audio controls>
                        <source src={props.audio} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>

                <div class="text-right font-light text-lg m-2">
                    <p>{props.date}</p>
                    <p>{props.day}</p>
                </div>
            </div>



        </section>
    )
}

export default CardAudio