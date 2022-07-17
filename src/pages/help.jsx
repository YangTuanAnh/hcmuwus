import React from "react";
import Card from "../components/Card/Card";
import GreetingBox from "../components/GreetingBox/GreetingBox";
import Quote from "../components/Quote/Quote";
import HelpButton from "../components/Card/HelpButton";
import SearchBar from "../components/SearchBar/SearchBar";


function Help()
{
    return (
        <section class="bg-grey-200 lg:p-20 p-8">
            <div class="flex flex-col align-center">
                <SearchBar />
                <h2 class="lg:text-center font-bold p-4 text-3xl text-blue-800">Nhận sự giúp đỡ từ</h2>
                <div>
                    <HelpButton
                        description="Bác sĩ tâm lí"
                        name="Nguyễn Văn A"
                        link="NguyenVanA"
                        imageLink="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000"
                    />
                    <HelpButton description="Luật sư viết di chúc" name="Nguyễn Văn B" />
                    <HelpButton description="Để sự ra đi của bạn không là vô nghĩa" name="Bệnh viện hiến xác C" />
                </div>
            </div>

        </section>
    )
}

export default Help