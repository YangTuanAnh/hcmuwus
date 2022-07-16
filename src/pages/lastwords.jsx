import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import CallButton from "../components/Card/CallButton";
function LastWords()
{
    return (
        <section class="lg:p-20">
            <SearchBar />
            <CallButton description="Bà Nội" name="Nguyễn Thị B" />
            <img class="m-auto my-20" src="/images/loiguigio.svg" />
        </section>
    )
}

export default LastWords