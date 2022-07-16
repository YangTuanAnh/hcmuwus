import React from "react";

function CardMemory(props)
{
    return (
        <section class="m-4 shadow-lg rounded-lg p-4 pb-16">
            <p class="text-baset">{props.caption}</p>
            <div class="mt-4 grid lg:grid-cols-12 lg:gap-4 grid-cols-8 gap-2">
                {
                    props.album.map((image, index) =>
                    {
                        return (
                            <img class="aspect-square rounded-lg" src={image} alt={"Image " + index} />
                        )

                    })
                }
            </div>
        </section>
    )
}

export default CardMemory