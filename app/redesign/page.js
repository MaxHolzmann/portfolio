"use client";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "../components/Project";
import DownArrow from "../components/DownArrow";

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
      "I am an active member in my community as well as an experienced business professional. I am a licensed real estate agent, real estate assistant & real estate transaction coordinator. I also serve on the Board of Directors for South Shore Chorale, and previously served on the Board of Directors for United Way Fond du Lac.",
    sectionOneThirdText:
      "I am seeking a full-time position as a Front End or Full Stack Web Developer. I believe my strong communication skills and professional experience would make a valuable asset to any team.",
  };

  //title, description, image, deployment, github)
  const projectGameLog = {title:'Game-Log', description:'Game-Log is a web application for keeping track of your gaming backlog. Utilizing a kanban board style list, users can add games, remove games and categorize games between three lists, "Back Log", "Currently Playing" and "Completed". This project was built with ReactJS & TailwindCSS, utilizing MongoDB as a database solution and NextAuth as an authentication solution.', image:'/blueberries.jpg', deployment:'test.com', github:'test.com'};
  const projectMaxBlog = {title:'Max Blog', description:'A basic blog application built with Handlebars, BootstrapCSS and MySQL / Sequelize.', image:'/blueberries.jpg', deployment:'test.com', github:'test.com'};
  const projectBlueberries = {title:'Blueberries Music', description:'A landing page for a local barbershop quartet that I am apart of. This website utilizies primarily React and TailwindCSS, and is deployed via Vercel.', image:'/blueberries.jpg', deployment:'test.com', github:'test.com'};

  return (
    <>
      {/* fix this on small / phone screens */}
      <header className='flex h-screen flex-col place-items-center justify-center bg-gradient-to-b from-orange-400 pb-96 pt-52 text-center sm:p-10 sm:pt-0'>
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
        className='mx-10 grid grid-cols-1 items-center justify-items-center p-32 pb-20 text-center lg:grid-cols-2'
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
        <h1 className='mt-10 p-16 text-6xl bg-gradient-to-b from-slate-300 to-slate-600 bg-clip-text text-transparent drop-shadow'>
          Projects
        </h1>
        <Project
          title={projectGameLog.title}
          description={projectGameLog.description}
          image={projectGameLog.image}
          deployment={projectGameLog.deployment}
          github={projectGameLog.github}
        ></Project>
        <Project
          title={projectBlueberries.title}
          description={projectBlueberries.description}
          image={projectBlueberries.image}
          deployment={projectBlueberries.deployment}
          github={projectBlueberries.github}
        ></Project>
        <Project
          title={projectMaxBlog.title}
          description={projectMaxBlog.description}
          image={projectMaxBlog.image}
          deployment={projectMaxBlog.deployment}
          github={projectMaxBlog.github}
        ></Project>
      </section>
    </>
  );
}
