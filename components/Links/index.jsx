import simpleIcons from "simple-icons";
import { links } from "../../data.json";
import { iconify } from "../../utils";
import classes from "./style.module.css";

export default function Links(){
  return <div className={`Links bottom-0 left-0 fixed text-primary-500 flex flex-col justify-between p-2`}>
    {links.map((link) => <LinkItem key={link.icon} {...link}/>)}
  </div>
}

function LinkItem(props){
  const {alt, icon, link} = props;
  const ic = simpleIcons.get(iconify(icon));
  const component = ic.component || <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>{icon}</title>
    <path d={ic.path} fill="white" />
  </svg>

  return <a alt={alt} rel="noreferrer" href={link} target="_blank" className={`cursor-pointer transition hover:scale-125 transform text-lg m-2 ${classes.LinkItem}`}>
    {component}
  </a>
}