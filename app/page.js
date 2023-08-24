"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  //Initiates AOS for Scrolling animations
  useEffect(() => {
    AOS.init();
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const allText = {
    "headerText": "Hi, I'm Maximilian",
    "headerName": "Maximilian",
    "headerDescription": "Full Stack Web Developer",
    "sectionOneHeader": "Passion",
    "sectionOneText": "I pour my passion into every aspect of developing websites. From the initial concept to the final launch, I infuse my work with enthusiasm and dedication. With meticulous attention to detail, I craft visually captivating designs and seamless functionalities that engage and delight users.",
    "sectionTwoHeader": "Experience",
    "sectionTwoText": "Write about my experience here",
    "sectionThreeHeader": "Projects",
    "sectionThreeText": "Showcasing projects",
  }
  /* 
  TODO: 
  Add divs for each text block to handle padding / margin between each instead of applying margin to each text item
  Change profile image

  Potential snap idea where each section takes up full view of screen, changing color backgrounds etc.
  Incorporate more images versus the wall of text.
  redo some of the text.

  */


  return (
    <div>
      <main className="flex flex-col items-center">
        <div data-aos='fade-down' className='w-3/4 flex items-center justify-center gap-2 p-16 my-5 rounded-xl shadow-xl xsm: bg-gray-600 flex-col sm:flex-col lg:flex-row'>
          <img
            data-aos='fade-right'
            className='h-64'
            src='/profile-pic.png'
          ></img>


          <h1 data-aos='fade-left' className='lg:text-8xl text-center text-6xl sm:mt-10 lg:mt-0 text-white'>
            {allText.headerText}
          </h1>
        </div>

        <div className='flex flex-col items-center justify-center gap-2 p-10 mx-40  my-2'
          data-aos='fade-up'>
          <h2 class="animate-text text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-7xl font-semibold">{allText.headerDescription}</h2>

        </div>
      </main>

      <div className='bg-white flex flex-col items-center justify-center gap-2 p-12'>
        <h1
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='text-8xl text-center'
        >
          {allText.sectionOneHeader}
        </h1>

        <h2 data-aos='fade-up' data-aos-anchor-placement='top-center' className='py-10 text-gray-600 text-4xl text-center'>
          {allText.sectionOneText}
        </h2>

        <h1
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='text-8xl text-center py-20'
        >
          {allText.sectionTwoHeader}
        </h1>

        <h2 data-aos='fade-up' data-aos-anchor-placement='top-center' className='text-4xl text-center'>
          {allText.sectionTwoText}
        </h2>



        <h1
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='py-20 text-8xl text-center'
        >
          {allText.sectionThreeHeader}
        </h1>

        <h2 data-aos='fade-up' data-aos-anchor-placement='top-center' className='py-10 text-4xl text-center'>
          {allText.sectionThreeText}
        </h2>

      </div>
    </div>
  );
}
