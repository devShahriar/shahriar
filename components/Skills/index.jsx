import { skills } from "../../data.json";
import { getIcon } from "../../utils";
import ProgressBar from "../ProgressBar";
import Section from "../Section";

export default function Skills(){
  return <Section className="skills">
    {skills.map(({name, items})=>{
      return <div key={name} className="">
        <div className="font-bold text-2xl text-primary-500 my-5 cursor-pointer">{name}</div>
        <div className="mb-10">
          {items.map(item=>{
            const label = item.label;
            const icon = getIcon(item.icon ?? item.label)
            return <div className="text-secondary-100" key={item.label}>
              <div className="flex mb-5 items-center">
                <span className="mr-5">{icon}</span>
                <span className="flex-grow">{label}</span>
                <ProgressBar progress={item.progress}/>
              </div>
            </div>
          })}
        </div>
      </div>
    })}
  </Section>
}

