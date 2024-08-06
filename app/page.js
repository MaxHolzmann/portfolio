"use client";
import { useRef } from "react";
import "aos/dist/aos.css";
import Project from "./components/Project";
import DownArrow from "./components/DownArrow";

export default function Home() {
  const aboutMeRef = useRef();
  const allText = {
    headerText: "Hi, I'm Maximilian.",
    headerName: "Maximilian",
    headerDescription: "Full Stack Web Developer.",
    sectionOneHeader: "Experience",
    sectionOneText:
      "Hi! I'm Maximilian Holzmann. I am a graduate of University of Minnesota's Full Stack Web Development Bootcamp. I have also completed a Web Development internship with HomeTownTickets.com. I am proficient in JavaScript, React, TailwindCSS, Node, Express, MongoDB, MySQL, Next.js & more.",
    sectionOneSecondText:
      "I am an active member in my community as well as an experienced business professional. I am a licensed real estate agent, real estate assistant & real estate transaction coordinator. I also serve on the Board of Directors for South Shore Chorale, and previously served on the Board of Directors for United Way Fond du Lac.",
    sectionOneThirdText:
      "I am seeking a full-time position as a Front End or Full Stack Web Developer. I believe my strong communication skills and professional experience would make a valuable asset to any team.",
  };

  //title, description, image, deployment, github)
  const projectGameLog = {
    title: "Game-Log",
    description:
      'Game-Log is a web application for keeping track of your gaming backlog. Utilizing a kanban board style list, users can add games, remove games and categorize games between three lists, "Back Log", "Currently Playing" and "Completed". This project was built with ReactJS & TailwindCSS, utilizing MongoDB as a database solution and NextAuth as an authentication solution.',
    image: "/gamelog.png",
    deployment: "https://game-log.vercel.app/",
    github: "https://github.com/MaxHolzmann/game-log",
  };
  const projectMaxBlog = {
    title: "Max Blog",
    description:
      "A basic blog application built with Handlebars, BootstrapCSS and MySQL / Sequelize.",
    image: "/maxblog.png",
    deployment: "https://max-blog.herokuapp.com/",
    github: "https://github.com/MaxHolzmann/maxs-blog",
  };
  const projectBlueberries = {
    title: "Blueberries Music",
    description:
      "A landing page for a local barbershop quartet that I am apart of. This website utilizies primarily React and TailwindCSS, and is deployed via Vercel.",
    image: "/blueberries.jpg",
    deployment: "https://www.blueberriesmusic.com/",
    github: "https://github.com/MaxHolzmann/blueberriesmusic",
  };
  const projectHourLog = {
    title: "Hour Log",
    description:
      'A full stack web application created using React, TailwindCSS, Next.JS, MongoDB & NextAuth. This web application is a simple solution for tracking work hours for companies who have employees track their own hours. Utilizing the "react-to-print" library, users can select a range of dates & export their hours into a convienant file PDF for their employer.',
    image: "/hourlog.png",
    deployment: "https://hour-log-gamma.vercel.app/",
    github: "https://github.com/MaxHolzmann/hour-log",
  };
  const projectTimeline = {
    title: "Real Estate Timeline Generator",
    description:
      "A one page web app utiilizing React Form Hook, in coalition with React, TailwindCSS and NextJS. This web application asks the user to input information regarding the timelines in a Real Estate transaction and creates a branded PDF for the user to send to their client. I created this project for my own Real Estate practice & my Real Estate team, The Schiek Team.",
    image: "/timeline.png",
    deployment: "https://timeline-gen.vercel.app/",
    github: "https://github.com/MaxHolzmann/real-estate-timeline-gen",
  };

  return (
    <>
      <header className="sm: flex h-screen flex-col place-items-center justify-center bg-gradient-to-b from-orange-500 via-orange-400 to-white to-95% pb-96 pt-52 text-center sm:p-10 sm:pt-0">
        <h1 className="text-wrap mt-8 text-center font-bebas text-8xl font-bold tracking-wide text-white drop-shadow-lg md:text-9xl">
          {allText.headerText}
        </h1>
        <h2 className="p-8 font-bebas text-6xl font-semibold tracking-wide text-white drop-shadow">
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
          <DownArrow className="drop-shadow-md hover:scale-105" />
        </button>
      </header>

      <section
        ref={aboutMeRef}
        className="mx-10 grid grid-cols-1 items-center justify-items-center text-center md:p-32 md:pb-20 lg:grid-cols-2 lg:gap-20"
      >
        <img
          src="/profile-pic-white.png"
          className="max-w-md rounded-full shadow-lg sm:mb-5 sm:max-w-sm"
        />
        <div className="flex max-w-4xl flex-col justify-center">
          <h1 className="mt-10 animate-text bg-gradient-radial from-orange-500  to-orange-200 bg-clip-text pb-10 font-bebas text-8xl font-semibold text-transparent md:mt-0">
            About Me
          </h1>
          <p className="pb-4 text-xl font-normal">{allText.sectionOneText}</p>
          <p className=" pb-4 text-xl font-normal">
            {allText.sectionOneSecondText}
          </p>
          <p className=" text-xl font-normal ">{allText.sectionOneThirdText}</p>
        </div>
      </section>

      <section className="flex flex-col place-items-center justify-center  bg-gradient-to-b from-white to-slate-600 text-center">
        <h1 className="to-slate-00 mt-10  animate-text bg-gradient-radial from-slate-500 bg-clip-text p-16 font-bebas text-8xl text-transparent drop-shadow-md">
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
          title={projectHourLog.title}
          description={projectHourLog.description}
          image={projectHourLog.image}
          deployment={projectHourLog.deployment}
          github={projectBlueberries.github}
        ></Project>
        <Project
          title={projectTimeline.title}
          description={projectTimeline.description}
          image={projectTimeline.image}
          deployment={projectTimeline.deployment}
          github={projectTimeline.github}
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
