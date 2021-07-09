import { BiUpArrowCircle } from "react-icons/bi";
import colors from "tailwindcss/colors";
import { About, Courses, Experiences, Links, Navbar, Skills } from "../components";

export default function Home() {
  return (
    <div className="font-mono bg-secondary-900 h-screen overflow-auto scrollbar scrollbar-thumb-green-500 scrollbar-track-gray-100">
      <Navbar />
      <Links />
      <div>
        <About />
        <Skills />
        <Experiences />
        <Courses />
      </div>
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
