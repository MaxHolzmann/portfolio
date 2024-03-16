"use client";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "../components/Project";
import DownArrow from "../components/DownArrow";

//add a dark mode toggle for fun! :D

export default function Home() {
  const aboutMeRef = useRef();
  const allText = {
    headerText: "Hi, I'm Maximilian.",
    headerName: "Maximilian",
    headerDescription: "Full Stack Web Developer 💻",
    sectionOneHeader: "Experience",
    sectionOneText:
      "I am a graduate of University of Minnesota's Full Stack Web Development Bootcamp. I have also completed a Web Development internship with HomeTownTickets.com. I am proficient in JavaScript and have experience with React, TailwindCSS, Node, Express, MongoDB, MySQL, Next.js & more.",
    sectionOneSecondText:
      "I am an active member in my community as well as an experienced business professional. I am a licensed real estate agent and also serve on the Board of Directors for South Shore Chorale.",
    sectionOneThirdText:
      "I am seeking a full-time position as a Web Developer. I believe my strong communication skills and professional experience would make a valuable asset to any team.",
  };
  //title, description, image, deployment, github)
  const projectOne = {};

  return (
    <>
      <header className='flex h-screen flex-col place-items-center justify-center bg-gradient-to-b from-orange-400 pb-96 text-center sm:p-10'>
        <h1 className='mt-10 text-center text-6xl font-bold text-white drop-shadow-lg md:text-9xl'>
          {allText.headerText}
        </h1>
        <h2 className='p-6 text-5xl font-semibold text-white drop-shadow'>
          {allText.headerDescription}
        </h2>
        <button
          onClick={() => {
            aboutMeRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        >
          <DownArrow className='drop-shadow-md hover:scale-105' />
        </button>
      </header>

      <section
        ref={aboutMeRef}
        className='mx-10 grid grid-cols-1 items-center justify-items-center p-10 pb-10 text-center lg:grid-cols-2'
      >
        <img
          src='/profile-pic-white.png'
          className='max-w-md rounded-full shadow-lg sm:mb-5 sm:max-w-sm'
        />
        <div className='flex max-w-4xl flex-col justify-center'>
          <h1 className='bg-gradient-to-r from-orange-500 to-white bg-clip-text pb-10 text-6xl font-semibold text-transparent'>
            About Me
          </h1>
          <p className='pb-4 text-xl font-normal'>{allText.sectionOneText}</p>
          <p className=' pb-4 text-xl font-normal'>
            {allText.sectionOneSecondText}
          </p>
          <p className=' text-xl font-normal '>{allText.sectionOneThirdText}</p>
        </div>
      </section>

      <section className='flex flex-col place-items-center justify-center  bg-gradient-to-b from-white to-slate-600 text-center'>
        <h1>Projects</h1>
        <Project
          title='test'
          description='test'
          image='test'
          deployment='test.com'
          github='test.com'
        ></Project>
        <Project
          title='test'
          description='test'
          image='test'
          deployment='test.com'
          github='test.com'
        ></Project>
        <Project
          title='test'
          description='test'
          image='test'
          deployment='test.com'
          github='test.com'
        ></Project>
      </section>
    </>
  );
}
