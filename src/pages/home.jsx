import React from "react";
import Card from "../components/Card/Card";
import CardAudio from "../components/Card/CardAudio";
import Footer from "../components/Footer/Footer";
import GreetingBox from "../components/GreetingBox/GreetingBox";
import HintBox from "../components/HintBox/HintBox";
import Quote from "../components/Quote/Quote";
import SearchBar from "../components/SearchBar/SearchBar";

function Home()
{
    const tasks = [
        {
            "taskTitle": "Đi dạo với cháu ngoại ở công viên",
            "headerImage": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "taskTitle": "Đi dạo với cháu ngoại ở công viên",
            "headerImage": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "taskTitle": "Đi dạo với cháu ngoại ở công viên",
            "headerImage": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "taskTitle": "Đi dạo với cháu ngoại ở công viên",
            "headerImage": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "taskTitle": "Đi dạo với cháu ngoại ở công viên",
            "headerImage": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
    ]
    return (
        <div>
            <section class="lg:p-20">
                <GreetingBox
                    avatar="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
                    message="Chào buổi sáng, A"
                />
                <Quote
                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin mauris non magna congue pretium"
                    author="Nguyễn Văn A"
                />
                <SearchBar />
                <HintBox />
                <div class="grid lg:grid-cols-4 grid-cols-2">
                    {
                        tasks.map((task, index) =>
                        {
                            return (
                                <Card
                                    taskTitle={task.taskTitle}
                                    headerImage={task.headerImage}d
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