import React from 'react'
import Image from 'next/image'
import imga from "../../images/2.png"
const Hero = () => {
    return (
        <>
            <section className='flex justify-center items-center w-full '>
                <div className='md:w-[98%] w-full   flex justify-center items-center flex-wrap '>
                    <div className='md:w-[50%] w-full h-[460px] overflow-hidden     m-2 bg-black relative'>
                        <Image src={imga} className='object-cover duration-500 hover:scale-150 object-center h-full w-full opacity-40 absolute  ' alt='img' />
                        <div class="pl-3 pr-2  pb-4   text-white absolute bottom-0  z-10 w-full">
                            <p class="leading-relaxed uppercase text-xs text-[#ffae00] font-semibold">educatio</p>
                            <h1 class="text-2xl w-full font-extrabold title-font mb-2">Shooting Stars Shooting StarsShooting StarsShooting StarsShooting StarsShooting StarsShooting StarsShooting StarsShooting Starsh</h1>
                            <p class="mt-2 text-sm ">Learn More

                            </p>
                        </div>
                    </div>


                    <div className=' relative items-center m-2 md:w-[45%] w-full  '>
                    <div className='w-full h-[225px] overflow-hidden   my-2 bg-black relative cursor-pointer'>
                            <Image src={imga} className='object-cover  duration-500 hover:scale-150 object-center h-full w-full opacity-40 absolute  ' alt='img' />
                            <div class=" text-white absolute    pl-3 pr-2  pb-2 bottom-0  z-10 w-full">
                                <p class="leading-relaxed uppercase text-xs font-semibold text-[#ffae00]">educatio</p>
                                <h1 class=" w-full font-extrabold title-font ">Shooting Stars Shooting StarsShooting StarsShooting StarsShooting StarsShooting StarsShooting StarsShooting StarsShooting Starsh</h1>
                                <p class=" text-xs ">Learn More

                                </p>
                            </div>
                        </div>
                        <div className='w-full h-[225px] overflow-hidden   my-2 bg-black relative cursor-pointer'>
                            <Image src={imga} className='object-cover  duration-500 hover:scale-150 object-center h-full w-full opacity-40 absolute  ' alt='img' />
                            <div class=" text-white absolute    pl-3 pr-2  pb-2 bottom-0  z-10 w-full">
                                <p class="leading-relaxed uppercase text-xs font-semibold text-[#ffae00]">educatio</p>
                                <h1 class=" w-full font-extrabold title-font ">Shooting Stars Shooting StarsShooting StarsShooting StarsShooting StarsShooting StarsShooting StarsShooting StarsShooting Starsh</h1>
                                <p class=" text-xs ">Learn More

                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* <section class="text-gray-600 body-font bg-red-900">
                <div class="container px-2 py-24 mx-auto flex ">
                    <div class=" mx-auto">

                        <div class="flex flex-wrap -mx-2">
                            <div class="px-2 w-1/2">
                                <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460" />
                                    <div class="text-center relative z-10 w-full">
                                        <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                        <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="px-2 w-1/2">
                                <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x420" />
                                    <div class="text-center relative z-10 w-full">
                                        <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                        <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Hero
