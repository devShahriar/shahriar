import { skills } from "../../data.json";
import { getIcon } from "../../utils";
import Section from "../Section";

export default function Skills(){
  return <Section className="skills">
    {skills.map(({name, items})=>{
      return <div key={name} className="">
        <div className="font-bold text-2xl text-primary-500 my-5 cursor-pointer">{name}</div>
        <div className="">
          {items.map(item=>{
            let label = '', icon = '';
            if(typeof item === "object"){
              label = item.label;
              icon = getIcon(item.icon)
            } else {
              label = item;
              icon = getIcon(item)
            }
            return <div className="text-secondary-100" key={item}>
              <div className="w-1/4 flex mb-5">
                <span className="mr-5">{icon}</span>
                <span>{label}</span>
              </div>
            </div>
          })}
        </div>
      </div>
    })}
  </Section>
}

