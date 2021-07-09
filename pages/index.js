import { BiUpArrowCircle } from "react-icons/bi";
import colors from "tailwindcss/colors";
import { About, Courses, Experiences, Skills, Wrapper } from "../components";

export default function Home() {
  return (
    <Wrapper>
      <About />
      <Skills />
      <Experiences />
      <Courses />
      <BiUpArrowCircle onClick={()=>{
        const sectionElement = document.querySelector(`.Section-About`);
        if(sectionElement)
          sectionElement.scrollIntoView({ 
            behavior: 'smooth'
          });
      }} className="fixed bottom-0 p-3 right-0 cursor-pointer animate-slow-bounce" size={50} fill={colors.green[500]}/>
    </Wrapper>
  )
}
