import React from "react";

function CardProfile(props)
{
    return (
        <header style={{
            backgroundImage: `url(${props.headerImage})`
        }}>
            <div class="bg-white rounded-xl shadow-xl pb-16 px-8 my-8">
                <img class="rounded-full w-40 h-40 object-cover ring-2 p-2 ring-gray-200 origin-top -translate-y-8 m-auto" src={props.avatar} alt={props.name} />
                <h2 class="font-bold text-3xl text-center">{props.name}</h2>
                <p class="font-light text-lg text-center">{props.caption}</p>
                <a class="px-4 py-2 text-white bg-blue-500 rounded-lg text-lg w-20 float-right text-center">Edit</a>

            </div>
        </header >
    )
}

export default CardProfile