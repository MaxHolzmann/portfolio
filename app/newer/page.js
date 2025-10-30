"use client";
import { useRef, useEffect, useState } from "react";
import Project from "../components/Project";
import ProjectC from "../components/ProjectC";
import "aos/dist/aos.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import "react-multi-carousel/lib/styles.css";

export default function Newer() {
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
      "I am seeking a full-time position as a Front End or Full Stack Web Developer. Besides my technical expertise, I believe my strong communication skills and professional experience would make a valuable asset to any team.",
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
      <header>
        <nav className="mx-auto mt-6 flex w-3/4 flex-col items-center justify-center rounded-full border border-gray-800/50 bg-gradient-to-r from-black via-gray-900 to-black p-4 text-2xl text-white shadow-lg shadow-black/20 backdrop-blur-sm">
          <ul className="flex w-full items-center justify-around gap-3">
            <li>
              <a
                href="/ "
                className="group relative overflow-hidden rounded-full px-5 py-3 text-white transition-all duration-300 hover:scale-110"
              >
                <span className="relative z-10 font-medium tracking-wide">
                  Home
                </span>
                <span className="absolute inset-0 -z-0 scale-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-transform duration-300 ease-out group-hover:scale-100"></span>
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="group relative overflow-hidden rounded-full px-5 py-3 text-white transition-all duration-300 hover:scale-110"
              >
                <span className="relative z-10 font-medium tracking-wide">
                  Projects
                </span>
                <span className="absolute inset-0 -z-0 scale-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-transform duration-300 ease-out group-hover:scale-100"></span>
              </a>
            </li>
            <li>
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 opacity-75 blur-sm"></div>
                <p className="relative rounded-full bg-gradient-to-br from-orange-500 to-orange-600 px-5 py-3 font-bold text-white shadow-lg ring-2 ring-orange-400/50">
                  MH
                </p>
              </div>
            </li>
            <li>
              <a
                href="/resume"
                className="group relative overflow-hidden rounded-full px-5 py-3 text-white transition-all duration-300 hover:scale-110"
              >
                <span className="relative z-10 font-medium tracking-wide">
                  Resume
                </span>
                <span className="absolute inset-0 -z-0 scale-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-transform duration-300 ease-out group-hover:scale-100"></span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="group relative overflow-hidden rounded-full px-5 py-3 text-white transition-all duration-300 hover:scale-110"
              >
                <span className="relative z-10 font-medium tracking-wide">
                  Contact
                </span>
                <span className="absolute inset-0 -z-0 scale-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-transform duration-300 ease-out group-hover:scale-100"></span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="mt-20 flex flex-col items-center justify-center px-8">
          <div className="mb-8 flex items-center justify-center">
            <h1 className="font-sans text-5xl font-light tracking-wide text-gray-800">
              Hello! I'm
            </h1>
          </div>
          <div className="flex items-center justify-center gap-12">
            <div className="group relative">
              <img
                src="/max3_real.png"
                alt="Maximilian Holzmann"
                className="relative max-w-md  transition-transform duration-500 group-hover:scale-105 sm:mb-5 sm:max-w-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-sans bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-7xl font-bold tracking-tight text-transparent">
                Maximilian
              </h1>
              <h1 className="font-sans bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-7xl font-bold tracking-tight text-transparent">
                Holzmann
              </h1>
              <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400"></div>
            </div>
          </div>
        </section>
      </main>
      <section>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-sans text-5xl font-light tracking-wide text-gray-800">
            About Me
          </h1>
        </div>
      </section>
    </>
  );
}
