import Head from 'next/head';
import { useContext } from 'react';
import { BiUpArrowCircle } from "react-icons/bi";
import colors from "tailwindcss/colors";
import { About, Courses, Experiences, Links, Navbar, Skills } from "../components";
import { RootContext } from '../contexts';

export default function Home() {
  const {data} = useContext(RootContext)
  return (
    <div className="font-mono bg-secondary-900 h-screen overflow-auto scrollbar scrollbar-thumb-green-500 scrollbar-track-gray-100">
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Portfolio for devShahriar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Links />
      <main>
        <About />
        <Skills />
        <Experiences />
        <Courses />
      </main>
      <BiUpArrowCircle onClick={()=>{
        const sectionElement = document.querySelector(`.Section-About`);
        if(sectionElement)
          sectionElement.scrollIntoView({ 
            behavior: 'smooth'
          });
      }} className="fixed bottom-0 p-3 right-0 cursor-pointer animate-slow-bounce" size={50} fill={colors.green[500]}/>
    </div>
  )
}
