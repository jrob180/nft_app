import React, {useState} from "react";
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

function Home(){
    return(
    <div className="App">
        
        <div class="relative flex flex-col bg-black py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div class="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                <div class="max-w-xl mb-6">
                    <div>
                    <h1 class="inline-block px-3 py-px mb-10 text-3xl font-bold font-sans tracking-wider text-gray-300 rounded-full bg-teal-gray-300">
                        Elemental
                    </h1>
                    </div>

                    <h2 class="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-400 sm:text-lg sm:leading-none">
                    [The race begins October 25th]<br class="hidden md:block" />

                    </h2>
                    <p class="text-base font-sans text-gray-600 md:text-lg mb-10 mt-10">
                    243 years ago, the elements were scattered across the universe. It is up to you to harness the power of all the elements and craft the almighty!
                    </p>
                </div>
                <div class="flex flex-col items-center content-center justify-around md:flex-row">
                    <a
                    href="/"
                    class="inline-flex items-center content-center justify-center w-full h-12 px-6 mb-3 font-sans tracking-wide text-white"
                    >
                    [Connect Metamask]
                    </a>
                    <a
                    href="/"
                    class="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-sans tracking-wide text-white"
                    >
                    [Learn More]
                    </a>

                </div>
                </div>
            </div>
            <div class="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                src="https://cdna.artstation.com/p/marketplace/presentation_assets/000/968/606/large/file.jpg?1622646495"
                alt=""
                />
            </div>
            </div>



            <div class="bg-black px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="bg-black max-w-xl mb-20 md:mx-auto sm:text-center lg:max-w-2xl md:mt-15">

                    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-300 sm:text-4xl md:mx-auto">
                        Roadmap
                    </h2>
                    <p class="text-base text-gray-600 md:text-lg">
                    Our future, outlined in a few steps.
                    </p>
                </div>
                <div class="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="flex flex-col justify-center p-5 border rounded shadow-sm">
                    <div class="content-center items-center">
                        <h6 class="text-white mb-2 font-sans leading-5">Phase I</h6>
                        <p class="font-sans mb-3 text-sm text-gray-500">
                        Grow our community on discord. Engage with our community. Develop to fit their needs.
                        </p>
                    </div>
                    </div>

                    <div class="flex flex-col justify-center p-5 border rounded shadow-sm">
                    <div class="content-center items-center">
                        <h6 class="text-white mb-2 font-sans leading-5">Phase II</h6>
                        <p class="font-sans mb-3 text-sm text-gray-500">
                        Grow our community on discord. Engage with our community. Develop to fit their needs.
                        </p>
                    </div>
                    </div>

                    <div class="flex flex-col justify-center p-5 border rounded shadow-sm">
                    <div class="content-center items-center">
                        <h6 class="text-white mb-2 font-sans leading-5">Phase III</h6>
                        <p class="font-sans mb-3 text-sm text-gray-500">
                        Grow our community on discord. Engage with our community. Develop to fit their needs.
                        </p>
                    </div>
                    </div>

                    <div class="flex flex-col justify-center p-5 border rounded shadow-sm">
                    <div class="content-center items-center">
                        <h6 class="text-white mb-2 font-sans leading-5">Phase IV</h6>
                        <p class="font-sans mb-3 text-sm text-gray-500">
                        Grow our community on discord. Engage with our community. Develop to fit their needs.
                        </p>
                    </div>
                    </div>
                </div>
            </div>


            <div class="bg-black px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="mx-auto mb-10 lg:max-w-xl sm:text-center">
                    <p class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-300 sm:text-4xl md:mx-auto">
                    Team
                    </p>
                    <p class="text-base font-sans text-gray-600 md:text-lg">
                    Meet the developers.
                    </p>
                </div>
                <div class="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-2 lg:max-w-screen-lg">
                    <div>
                    <div class="relative pb-56 mb-4 rounded shadow lg:pb-64">
                        <img class="absolute object-cover w-full h-full rounded" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="Person" />
                    </div>
                    <div class="flex flex-col sm:text-center">
                        <p class="text-white text-lg font-sans">Jackson</p>
                        <p class="mb-5 text-md text-white font-sans">He is the goat</p>
                        <div class="flex items-center space-x-3 sm:justify-center">
                        </div>
                    </div>
                    </div>
                    <div>
                    <div class="relative pb-56 mb-4 rounded shadow lg:pb-64">
                        <img class="absolute object-cover w-full h-full rounded" src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
                    </div>
                    <div class="flex flex-col sm:text-center">
                        <p class="text-white text-lg font-sans">Reid</p>
                        <p class="mb-5 text-md text-white font-sans">Also kind of a goat</p>
                        <div class="flex items-center space-x-3 sm:justify-center">
                        </div>
                    </div>
                    </div>
                
                </div>
            </div>



        </div>
    );
};
export default Home;