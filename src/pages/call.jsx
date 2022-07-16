import React from "react";

function Call()
{
    return (
        <section class="bg-cover h-screen" style={{
            backgroundImage:`url("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")`
        }}>
            <div class="bg-gradient-to-t h-screen from-gray-600 to-transparent lg:p-20">
            <button type="button" class="text-gray-400 border border-gray-400 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
  <span class="sr-only">Icon description</span>
</button>
            </div>
        </ section>
    )
}

export default Call;