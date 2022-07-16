import React from "react";
import Card from "../components/Card/Card";
import GreetingBox from "../components/GreetingBox/GreetingBox";
import Quote from "../components/Quote/Quote";

function HelpButton(props) {
    return (
        <a href={props.link || "#"}>

        <div class="shadow-md rounded-md mx-8 my-2 p-4 content-center hover:bg-slate-200">
        
        <div class="flex space gap-4">
            <div style={{ "max-width": "4em" }} class="">
                <img class="rounded-md" src={props.imageLink}></img>
            </div>
            <div class="flex flex-col justify-center">
                <div class="font-bold text-lg">{props.name}</div>
                <div class="flex-0 text-sm">
                    {props.description}
                </div>
            </div>
        </div>
        
        </div>

        </a>
    );
}

function Help()
{
    return (
        <section class="bg-grey-200">
            <div class="flex flex-col align-center sm:py-20">
                <p class="text-center font-bold text-lg">Nhận sự giúp đỡ từ</p>
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