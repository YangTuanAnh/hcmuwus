import React from "react";
import CardProfile from "../components/Card/CardProfile";

function Profile()
{
    return (
        <section class="lg:p-20">
            <CardProfile
                headerImage="https://img.freepik.com/free-vector/abstract-colorful-fluid-background_23-2148901720.jpg?w=2000"
                name="Dianna"
                caption="Hello cả nhà iu của Ngoại"
                avatar="https://thumbs.dreamstime.com/b/mature-lady-relaxed-smiling-elder-woman-isolated-white-back-35307581.jpg"
            />
        </section>
    )
}

export default Profile