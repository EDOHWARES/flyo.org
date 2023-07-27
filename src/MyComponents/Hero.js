import React from 'react'
import IllusIntro from "../images/illustration-intro.png";
import noteIllus from "../images/3048234-removebg-preview.png";
import group77 from "../images/Group 77.png";

function Hero() {
  return (
    <section className='w-screen h-auto'>
        <div className='container flex flex-col space-y-10 mx-auto px-10'>
            <div className='relative flex mx-auto overflow-x-scroll'>
                <img src={IllusIntro} alt="" />
                <img src={noteIllus} alt="" />
                <img src={group77} alt="" />
            </div>
            <div className='flex flex-col space-y-6 text-white '>
                <h2 className='text-2xl md:text-3xl font-bold text-center'>All your files in one secure location, accessible anywhere</h2>
                <p className='text-center text-gray-300'>Flyo stores all your most important files in one secure location, Access them wherever you need, share and collaborate with friends, family, and co-workers</p>
                <a className='self-center font-bold text-center w-fit bg-cyanGrad py-2 px-12 rounded-3xl hover:bg-transparent hover:border border-cyanGrad' href="https://">Get Started</a>
            </div>
        </div>
    </section>
  )
}

export default Hero
