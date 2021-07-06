import { useContext } from "react";
import { RootContext } from "../../contexts";
import classes from "./style.module.css";

export default function Navbar(){
  return <div className={`Navbar top-2/4 fixed text-primary-500 flex justify-between w-1/4 transform rotate-90 ${classes.Navbar}`}>
    {['About', 'Skills', 'Experiences'].map(navbarItemLabel => <NavbarItem key={navbarItemLabel} label={navbarItemLabel}/>)}
  </div>
}

function NavbarItem(props){
  const {currentSection, setCurrentSection} = useContext(RootContext);
  const {label} = props;
  return <span className={`cursor-pointer text-lg NavbarItem-${label} ${classes.NavbarItem} ${currentSection === label.toLowerCase() ? 'font-bold' : ''}`} onClick={()=>{
    setCurrentSection(label.toLowerCase())
    const sectionElement = document.querySelector(`.Section-${label}`);
    if(sectionElement)
      sectionElement.scrollIntoView({ 
        behavior: 'smooth'
      });
  }}>
    {label}
  </span>
}