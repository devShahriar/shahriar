import simpleIcons from "simple-icons";
import { iconify } from "./";

export function getIcon(icon){
  const ic = simpleIcons.get(iconify(icon));
  return ic ? (ic.component || <svg role="img" style={{width: 24}} viewBox={`0 0 24 24`} xmlns="http://www.w3.org/2000/svg">
    <title>{icon}</title>
    <path d={ic.path} fill="white"/>
  </svg>) : icon;
}