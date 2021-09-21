import React, {useState} from "react";
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

function Home(){
    return(
    <div className="App">
        

        <div class="bg-black">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between">
                <a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
                    <svg class="w-8 text-teal-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
                    <rect x="3" y="1" width="7" height="12"></rect>
                    <rect x="3" y="17" width="7" height="6"></rect>
                    <rect x="14" y="1" width="7" height="6"></rect>
                    <rect x="14" y="11" width="7" height="12"></rect>
                    </svg>
                    <span class="ml-2 text-xl font-sans font-bold tracking-wide text-gray-100">Elemental</span>
                </a>
                <ul class="flex items-center hidden space-x-8 lg:flex">
                    <li><a href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400">Mint</a></li>
                    <li><a href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400">My Collection</a></li>
                </ul>

                <div class="lg:hidden">
                    <button aria-label="Open Menu" title="Open Menu" class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline">
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                        <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                        <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
                    </svg>
                    </button>

                    <div class="absolute top-0 left-0 w-full">
                    <div class="p-5 bg-white border rounded shadow-sm">
                        <div class="flex items-center justify-between mb-4">
                        <div>
                            <a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
                            <svg class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
                                <rect x="3" y="1" width="7" height="12"></rect>
                                <rect x="3" y="17" width="7" height="6"></rect>
                                <rect x="14" y="1" width="7" height="6"></rect>
                                <rect x="14" y="11" width="7" height="12"></rect>
                            </svg>
                            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
                            </a>
                        </div>
                        <div>
                            <button aria-label="Close Menu" title="Close Menu" class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                ></path>
                            </svg>
                            </button>
                        </div>
                        </div>
                        <nav>
                        <ul class="space-y-4">
                            <li><a href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Product</a></li>
                            <li><a href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Features</a></li>
                            <li><a href="/" aria-label="Product pricing" title="Product pricing" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Pricing</a></li>
                            <li><a href="/" aria-label="About us" title="About us" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">About us</a></li>
                            <li>
                            <a
                                href="/"
                                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Sign up"
                            >
                                Sign up
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    </div>

                </div>
                </div>
            </div>
            </div>


        <div class="relative flex flex-col bg-black py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div class="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">

                <div class="max-w-xl mb-6">

                    <p class="text-base font-sans text-gray-600 md:text-lg mb-10 mt-10">
                    Elemental is an NFT collection race. Players will race to mint the gods of the elements to take home
                    the ultimate prize: the entire contract pot!
                    </p>
                </div>
                
                <div class="max-w-xl mb-6">

                    <p class="text-base font-sans text-gray-400 md:text-lg mb-10 mt-10">
                    Minting begins October 25th
                    </p>
                </div>
                
                <div class="flex flex-col items-center content-center justify-between md:flex-row">
                    <a
                    href="/"
                    class="bg-gray-700 rounded-md inline-flex items-center content-center justify-center w-full h-12 px-5 m-3 font-sans tracking-wide text-white"
                    >
                    Connect Metamask
                    </a>
                    <a
                    href="/"
                    class="bg-gray-300 rounded-md inline-flex items-center justify-center w-full h-12 px-5 m-3 font-sans tracking-wide text-black"
                    >
                    Learn More
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
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-300 sm:text-4xl md:mx-auto">
                    How to Win
                    </h2>
                    <p class="text-base text-gray-600 md:text-lg">
                    Win by minting the ultimate forms of either of the four elements: The fire god, the wind god, the water god, and the earth god.
                    </p>
                </div>
                <div class="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
                    <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div class="mr-4">
                        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                        </div>
                    </div>
                    <div>
                        <h6 class="text-white mb-3 text-md font-sans leading-5">THE FIRE GOD</h6>
                        <p class="mb-3 text-sm text-gray-600 font-sans">
                        The fire god can be minted after acquiring one of each of the five levels of the fire wielders: a fire ghoul, a fire slayer, a junior hades, a death feeler, and an underworld ruler.
                        </p>
                        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                    </div>
                    </div>
                    <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div class="mr-4">
                        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                        </div>
                    </div>
                    <div>
                        <h6 class="text-white mb-3 text-md font-sans leading-5">THE WIND GOD</h6>
                        <p class="mb-3 text-sm text-gray-600 font-sans">
                        Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet!
                        </p>
                        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                    </div>
                    </div>
                    <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div class="mr-4">
                        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                        </div>
                    </div>
                    <div>
                        <h6 class="text-white mb-3 text-md font-sans leading-5">THE WATER GOD</h6>
                        <p class="mb-3 text-sm text-gray-600 font-sans">
                        A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind the bicycle shed, Hercules Morse, as big as a horse and Mrs Falani were up to no good with a bunch of crook pikelets.
                        </p>
                        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                    </div>
                    </div>
                    <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div class="mr-4">
                        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                        </div>
                    </div>
                    <div>
                        <h6 class="text-white mb-3 text-md font-sans leading-5">THE EARTH GOD</h6>
                        <p class="mb-3 text-sm text-gray-600 font-sans">
                        Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling. Inspiring, invest synergy capacity building, white paper; silo, unprecedented challenge B-corp problem-solvers.
                        </p>
                        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                    </div>
                    </div>
                </div>
                </div>


                <div class="bg-black px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                            FAQ
                        </h2>
                        <p class="text-base text-gray-500 md:text-lg">
                            To answer some of your questions.
                        </p>
                        </div>
                    </div>
                    <div class="max-w-screen-xl sm:mx-auto">
                        <div class="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                        <div class="space-y-8">
                            <div>
                            <p class="text-white self-start mb-4 text-xl font-medium">
                                How do I mint a character?
                            </p>
                            <p class="text-gray-500">
                                Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds.<br />
                                <br />
                                Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                            </p>
                            </div>
                            <div>
                            <p class="text-white mb-4 text-xl font-medium">
                                How many characters can I mint?
                            </p>
                            <p class="text-gray-500">
                                Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds.<br />
                                <br />
                                Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                            </p>
                            </div>
                            <div>
                            <p class="text-white mb-4 text-xl font-medium">Is the Space Pope reptilian!?</p>
                            <p class="text-gray-500">
                                A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.
                            </p>
                            </div>
                        </div>
                        <div class="space-y-8">
                            <div>
                            <p class="text-white mb-4 text-xl font-medium">How much money you got on you?</p>
                            <p class="text-gray-500">
                                Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds.<br />
                                <br />
                                Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                            </p>
                            </div>
                            <div>
                            <p class="text-white mb-4 text-xl font-medium">
                                Galaxies Orion's sword globular star cluster?
                            </p>
                            <p class="text-gray-500">
                                Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds.<br />
                                <br />
                                Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                            </p>
                            </div>
                            <div>
                            <p class="text-white mb-4 text-xl font-medium">
                                When has justice ever been as simple as a rule book?
                            </p>
                            <p class="text-gray-500">
                                Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds.<br />
                                <br />
                                Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                            </p>
                            </div>
                        </div>
                        </div>
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