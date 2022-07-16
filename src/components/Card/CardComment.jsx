import React from "react";

function CardComment(props)
{
    return (
        <div class="m-4 grid grid-cols-2">
            <div>
                <div class="flex flex-row">
                    <img class="w-12 h-12 rounded-lg" src={props.avatar} alt={props.name} />
                    <h3 class="text-xl font-bold m-4">{props.name}</h3>
                </div>
                <p class="text-base font-light">{props.caption}</p>
            </div>



            <div class="mt-4 grid lg:grid-cols-8 lg:gap-4 grid-cols-4 gap-2">
                {
                    props.album.map((image, index) =>
                    {
                        return (
                            <img class="aspect-square rounded-lg" src={image} alt={"Image " + index} />
                        )

                    })
                }
            </div>

        </div>
    )
}

export default CardComment