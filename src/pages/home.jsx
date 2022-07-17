import React from "react";
import Card from "../components/Card/Card";
import CardAudio from "../components/Card/CardAudio";
import Footer from "../components/Footer/Footer";
import GreetingBox from "../components/GreetingBox/GreetingBox";
import HintBox from "../components/HintBox/HintBox";
import Quote from "../components/Quote/Quote";
import SearchBar from "../components/SearchBar/SearchBar";
import Wishes from "../data/wishes.json"

function Home()
{
    return (
        <div>
            <section class="lg:p-20">
                <GreetingBox
                    avatar="https://assets.puzzlefactory.pl/puzzle/387/881/original.jpg"
                    message="Chào buổi sáng, Tony!"
                />
                <Quote
                    imageSrc="https://wp.penguin.co.uk/wp-content/uploads/2020/09/Nick-Hornby.jpg"
                    message="Anyone and everyone taking a writing class knows that the secret of good writing is to cut it back, pare it down, winnow, chop, hack, prune, and trim, remove every superfluous word, compress, compress, compress..."
                    author="- Nick Hornby"
                />
                <SearchBar />
                <HintBox />
                <div class="grid lg:grid-cols-4 grid-cols-2">
                    {
                        Wishes.map((task, index) =>
                        {
                            return (
                                <Card
                                    taskTitle={task.taskTitle}
                                    headerImage={task.headerImage}
                                    id={index}
                                />
                            )
                        })
                    }
                </div>

            </section>
            <Footer />
        </div>

    )
}

export default Home