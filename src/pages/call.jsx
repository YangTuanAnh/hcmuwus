import React from "react";
import Lottie from 'lottie-react';
import Phone from '../data/lotties/phone.json'

function Call()
{
    return (
        <section class="bg-cover h-fill" style={{
            backgroundImage: `url("https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F05%2FIron-Man.jpg")`
        }}>
            <div class="bg-gradient-to-t h-screen from-gray-600 to-transparent lg:p-20 p-8">
                <a href="/lastwords">
                    <button type="button" class="text-gray-700 border border-gray-700 hover:bg-blue-700 hover:text-white font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </button>
                </a>

                <div class="grid grid-cols-2">
                    <div class="py-24 bottom-0 fixed">
                        <h3 class="font-bold text-3xl text-white mb-2">Pepper Potts</h3>
                        <p class="font-light text-lg text-white mb-4">Vợ</p>
                        <span class="py-2 px-4 bg-gray-400 rounded-xl">00:21:45</span>
                    </div>
                    <Lottie class="m-auto right-0 bottom-0 fixed mr-8 py-16" animationData={Phone} />
                </div>


            </div >
        </ section >
    )
}

export default Call;