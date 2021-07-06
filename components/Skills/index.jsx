import Image from 'next/image';
import { useContext } from "react";
import { RootContext } from "../../contexts";
import { getIcon } from "../../utils";
import Section from "../Section";

function SkillItem(props){
  const {item} = props;
  let icon = '',label = '';
  if(typeof item === "string"){
    icon = getIcon(item)
    label = item
  } else {
    icon = getIcon(item.icon ?? item.label)
    label = item.label;
  }
  return <div className="text-primary-500 my-5" key={label}>
    <div className="flex items-center">
      <span className="mr-5 hover:scale-125 transform transition">{icon}</span>
      <span className="flex-grow text-lg font-bold">{label}</span>
    </div>
  </div>
}

export default function Skills(){
  const {data} = useContext(RootContext)
  return <Section className="skills" header="Skills" name="Skills">  
    <div>
      <div className="flex justify-center animate-fade-l-bounce">
        <Image
            src="/tech_stack.svg"
            alt="Tech Stack"
            width="500"
            height="500"
        />
      </div>
      <div className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${data.skills.length}`}>
        {data.skills.map(({name, items})=>{
          return <div key={name} className="m-2 bg-gradient-to-r hover:translate-y-2 hover:scale-110 transition duration-300 cursor-pointer transform from-secondary-800 via-secondary-800 to-secondary-900 bg-secondary-800 pl-5 rounded">
            <div className="font-extrabold text-2xl pb-2 text-primary-500 my-5 animate-fade-in-down">{name}</div>
            <div>
              {items.map(item=><SkillItem item={item} key={item.label ?? item}/>)}
            </div>
          </div>
        })}
      </div>
    </div>
  </Section>
}
