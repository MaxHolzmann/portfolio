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

  useEffect(() => {
    const maxScrollHeight = 2000; // Adjust this value as needed
    const minBlueValue = 120; // Adjust this value as needed

    const calculateBlueValue = () => {
      const percentScrolled = scrollPosition / maxScrollHeight;
      const blueValue = Math.round(
        percentScrolled * (255 - minBlueValue) + minBlueValue
      );
      return blueValue;
    };

    const blueValue = calculateBlueValue();
    const backgroundColor = `rgb(${blueValue}, ${blueValue}, 255)`;
    document.body.style.backgroundColor = backgroundColor;
  }, [scrollPosition]);


  const allText = {
   "headerText": "Hi, I'm Max",
   "headerDescription": "I am a Full Stack Web Developer based out of Fond du Lac, Wisconsin.",
   "sectionOneHeader": "Passion",
   "sectionOneText": "I pour my passion into every aspect of developing websites. From the initial concept to the final launch, I infuse my work with enthusiasm and dedication. With meticulous attention to detail, I craft visually captivating designs and seamless functionalities that engage and delight users.",
   "sectionTwoHeader": "Purpose",
   "sectionTwoText": "As a purpose-driven web developer, I am fueled by a deep commitment to building websites that serve a meaningful mission. Every line of code I write is guided by a clear purpose and a desire to make a positive impact.  I invest time in understanding the needs of my clients or users, ensuring that the websites I create are tailored to their goals and aspirations.",
   "sectionThreeHeader": "Projects",
   "sectionThreeText": "Showcasing projects",
  }
/* 
TODO: 
Add divs for each text block to handle padding / margin between each instead of applying margin to each text item
Fix border on profile image 
Change profile image
Change background
Potentially change opacity of scroll and change background
*/


  return (
    <>
      <main>
        <div className='flex items-center justify-center gap-2 p-12 xsm: flex-col sm:flex-col lg:flex-row'>
          <img
            data-aos='fade-right'
            className='border-solid border-2 border-sky-500 h-48 w-96 object-scale-down'
            src='/profile-pic.png'
          ></img>

          <h1 data-aos='fade-left' className='text-8xl text-center'>
           {allText.headerText}
          </h1>
        </div>

        <div className='flex flex-col items-center justify-center gap-2 p-4'>
          <h2 data-aos='fade-up' className='p-5 text-4xl text-center'>
            {allText.headerDescription}
          </h2>
        </div>
      </main>

      <div className='flex flex-col items-center justify-center gap-2 p-12'>
        <h1
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='text-8xl text-center'
        >
          {allText.sectionOneHeader}
        </h1>

        <h2 data-aos='fade-up' data-aos-anchor-placement='top-center' className='py-10 text-4xl text-center'>
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
    </>
  );
}
