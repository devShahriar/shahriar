import { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { HiPuzzle } from "react-icons/hi";
import colors from "tailwindcss/colors";
import { RootContext } from "../../contexts";
import classes from "./style.module.css";

export default function Navbar(){
  return <div className={`Navbar top-2/4 fixed text-primary-500 flex justify-between w-1/4 transform rotate-90 ${classes.Navbar}`}>
    {[['About', <AiFillHome fill={colors.green[500]} size={15}/>], ['Skills', <HiPuzzle fill={colors.green[500]} size={15}/>], ['Experiences', <BiTimeFive fill={colors.green[500]} size={15}/>]].map(navbarItem => <NavbarItem key={navbarItem[0]} item={navbarItem}/>)}
  </div>
}

function NavbarItem(props){
  const {currentSection, setCurrentSection} = useContext(RootContext);
  const {item: [label, icon]} = props;
  return <span className={`flex items-center cursor-pointer NavbarItem-${label} ${classes.NavbarItem} ${currentSection === label ? 'font-bold text-xl' : 'text-base'}`} onClick={()=>{
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