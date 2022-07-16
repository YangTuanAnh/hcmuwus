import React from "react";

function Article(props)
{
    return (
        <section class="p-20">
            <img
                src={props.headerImage}
                alt={props.title}
                class="m-auto max-h-80 rounded shadow-lg"
            />
            <h2 class="text-3xl border">
                {props.title}
            </h2>
            <span>{props.numberOfCompletion} đã làm được điều này</span>
            <p>{props.caption}</p>
        </section>
    )
}

export default Article