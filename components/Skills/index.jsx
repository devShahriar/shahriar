import Image from 'next/image';
import { useContext } from "react";
import { RootContext } from "../../contexts";
import { getIcon } from "../../utils";
import Section from "../Section";

function SkillItem(props){
  const {item} = props;
  let icon = '',label = '';
  console.log(item)
  if(typeof item === "string"){
    icon = getIcon(item)
    label = item
  } else {
    icon = getIcon(item.icon ?? item.label)
    label = item.label;
  }
  return <div className="text-primary-500 mb-10" key={label}>
    <div className="flex mb-3 items-center">
      <span className="mr-5">{icon}</span>
      <span className="flex-grow text-lg font-bold">{label}</span>
    </div>
  </div>
}

export default function Skills(){
  const {data} = useContext(RootContext)
  return <Section className="skills" header="Skills">  
    <div>
      <div className="flex justify-center animate-fade-in-from-right">
        <Image
            src="/tech_stack.svg"
            alt="Tech Stack"
            width="500"
            height="500"
        />
      </div>
      <div className={`grid grid-cols-${data.skills.length}`}>
        {data.skills.map(({name, items})=>{
          return <div key={name} className="">
            <div className="font-bold text-2xl text-primary-500 my-5 animate-fade-in-down">{name}</div>
            <div className="mb-10 pr-4">
              {items.map(item=><SkillItem item={item} key={item.label}/>)}
            </div>
          </div>
        })}
      </div>
    </div>
  </Section>
}
