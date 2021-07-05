import { useContext } from "react";
import { RootContext } from "../../contexts";
import classes from "./style.module.css";

export default function Navbar(){
  return <div className={`Navbar top-2/4 fixed text-gray-700 flex justify-between w-1/4 transform rotate-90 ${classes.Navbar}`}>
    {['About', 'Skills', 'Experience'].map(navbarItemLabel => <NavbarItem key={navbarItemLabel} label={navbarItemLabel}/>)}
  </div>
}

function NavbarItem(props){
  const {currentSection, setCurrentSection} = useContext(RootContext);
  const {label} = props;
  return <span className={`cursor-pointer text-base ${classes.NavbarItem} ${currentSection === label.toLowerCase() ? 'font-bold' : ''}`} onClick={()=>{
    setCurrentSection(label.toLowerCase())
    const sectionElement = document.querySelector(`.Section.${label.toLowerCase()}`);
    if(sectionElement)
      sectionElement.scrollIntoView({ 
        behavior: 'smooth' 
      });
  }}>
    {label}
  </span>
}