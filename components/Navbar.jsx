import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { HiPuzzle } from "react-icons/hi";
import { IoIosBook } from "react-icons/io";
import colors from "tailwindcss/colors";
import { RootContext } from "../contexts";
import classes from "./Navbar.module.css";

export default function Navbar(){
  const {currentSection} = useContext(RootContext);
  return <div className={`Navbar top-0 left-0 z-10 w-min rounded fixed text-primary-500 flex p-3 bg-secondary-800 justify-between ${classes.Navbar}`}>
    {[['About', AiFillHome], ['Skills', HiPuzzle], ['Experiences', BiTimeFive], ['Courses', IoIosBook]].map(([label, icon]) => <NavbarItem key={label} item={[label, React.createElement(icon, {fill: label === currentSection ? colors.gray[900] : colors.green[500], size: 15, key: label})]}/>)}
  </div>
}

function NavbarItem(props){
  const {currentSection, setCurrentSection} = useContext(RootContext);
  const {item: [label, icon]} = props;
  return <span className={`flex mx-5 items-center cursor-pointer NavbarItem-${label} ${classes.NavbarItem} ${currentSection === label ? 'font-bold text-xl' : 'text-base'}`} onClick={()=>{
    setCurrentSection(label)
    const sectionElement = document.querySelector(`.Section-${label}`);
    if(sectionElement)
      sectionElement.scrollIntoView({ 
        behavior: 'smooth'
      });
  }}>
    <span className="mr-2">{icon}</span>
    {label}
  </span>
}