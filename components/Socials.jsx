import { useContext } from "react";
import { RootContext } from "../contexts";
import { getIcon } from "../utils";

function LinkItem(props){
  const {alt, icon, link} = props;
  return <a alt={alt} rel="noreferrer" href={link} target="_blank" className={`cursor-pointer transition opacity-50 hover:opacity-100 hover:scale-125 transform text-lg m-2`}>
    {getIcon(icon)}
  </a>
}

export default function Links(){
  const {data} = useContext(RootContext);
  return <div style={{transform: 'translateY(50%)'}} className={`Links bottom-1/2 left-0 fixed text-primary-500 flex flex-col justify-between p-2`}>
    {data.links.map((link) => <LinkItem key={link.icon} {...link}/>)}
  </div>
}