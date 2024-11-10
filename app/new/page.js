"use client";
import { useRef } from "react";
import "aos/dist/aos.css";

export default function Redesign() {
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
      <header className="relative z-10 bg-[#8ed1fc]">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 690"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0 z-20 transition delay-150 duration-300 ease-in-out"
        >
          <path
            d="M 0,700 L 0,262 C 59.06415094339624,248.7069182389937 118.12830188679249,235.41383647798742 164,206 C 209.87169811320751,176.58616352201258 242.5509433962264,131.05157232704403 293,154 C 343.4490566037736,176.94842767295597 411.667924528302,268.3798742138365 463,315 C 514.332075471698,361.6201257861635 548.7773584905659,363.4289308176101 611,316 C 673.2226415094341,268.5710691823899 763.2226415094341,171.90440251572326 824,139 C 884.7773584905659,106.09559748427674 916.3320754716981,136.95345911949684 968,180 C 1019.6679245283019,223.04654088050316 1091.4490566037737,278.28176100628934 1138,267 C 1184.5509433962263,255.71823899371066 1205.8716981132075,177.9194968553459 1252,166 C 1298.1283018867925,154.0805031446541 1369.0641509433963,208.04025157232707 1440,262 L 1440,700 L 0,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="#8ed1fc"
            fillOpacity="1"
            className="path-0 transition-all delay-150 duration-300 ease-in-out"
          ></path>
        </svg>
      </header>
      <section className="relative z-0 bg-[#8ed1fc]"></section>
    </>
  );
}
