import { useState } from "react";
import classes from "./style.module.css";

export default function Navbar(){
  const [currentSection, setCurrentSection] = useState('about');

  return <div className={`Navbar absolute text-gray-700 flex justify-between w-1/4 transform rotate-90 ${classes.Navbar}`}>
    {['About', 'Skills', 'Experience'].map(navbarItemLabel => <NavbarItem key={navbarItemLabel} currentSection={currentSection} setCurrentSection={setCurrentSection} label={navbarItemLabel}/>)}
  </div>
}

function NavbarItem(props){
  const {label, currentSection, setCurrentSection} = props;
  return <span className={`cursor-pointer text-base ${classes.NavbarItem} ${currentSection === label.toLowerCase() ? 'font-bold' : ''}`} onClick={()=>setCurrentSection(label.toLowerCase())}>
    {label}
  </span>
}