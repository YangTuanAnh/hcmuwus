import React from "react";
import CardAudio from "../components/Card/CardAudio";
import Footer from "../components/Footer/Footer";

function Home()
{
    return (
        <div>
            <section class="lg:p-20">
                Hello World
                <CardAudio
                    caption="Hát ru con gái của mẹ"
                    date="16/07/2022"
                    day="Thứ Bảy"
                />
            </section>
            <Footer />
        </div>

    )
}

export default Home