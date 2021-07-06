import { links } from "../../data.json";
import { getIcon } from "../../utils";
import classes from "./style.module.css";

export default function Links(){
  return <div className={`Links bottom-0 left-0 fixed text-primary-500 flex flex-col justify-between p-2`}>
    {links.map((link) => <LinkItem key={link.icon} {...link}/>)}
  </div>
}

function LinkItem(props){
  const {alt, icon, link} = props;
  return <a alt={alt} rel="noreferrer" href={link} target="_blank" className={`cursor-pointer transition opacity-50 hover:opacity-100 hover:scale-125 transform text-lg m-2 ${classes.LinkItem}`}>
    {getIcon(icon)}
  </a>
}