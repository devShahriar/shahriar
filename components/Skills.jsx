import Image from 'next/image';
import { useContext } from "react";
import { RootContext } from "../contexts";
import Icon from "./Icon";
import Section from "./Section";

export default function Skills(){
  const {data} = useContext(RootContext)
  return <Section header="Skills" name="Skills">  
    <div className="flex justify-center animate-slow-bounce">
      <Image
        src="/tech_stack.svg"
        alt="Tech Stack"
        width="250"
        height="250"
      />
    </div>
    <div className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${data.skills.length}`}>
      {data.skills.map(({name, items})=>{
        return <div key={name} className="m-2 bg-gradient-to-r hover:scale-105 transition duration-200 cursor-pointer transform from-secondary-800 via-secondary-800 to-secondary-900 bg-secondary-800 pl-5 rounded">
          <div className="font-extrabold text-2xl pb-2 text-primary-500 my-5 animate-fade-in-down">{name}</div>
          <div>
            {items.map(item=><Icon item={item} key={item.label ?? item}/>)}
          </div>
        </div>
      })}
    </div>
  </Section>
}
