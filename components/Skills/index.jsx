import { skills } from "../../data.json";
import { getIcon } from "../../utils";
import ProgressBar from "../ProgressBar";
import Section from "../Section";

function SkillItem(props){
  const {label, progress} = props;
  const icon = getIcon(props.icon ?? label)
  return <div className="text-secondary-100" key={label}>
    <div className="flex mb-5 items-center">
      <span className="mr-5">{icon}</span>
      <span className="flex-grow text-lg">{label}</span>
      <ProgressBar progress={progress}/>
    </div>
  </div>
}

export default function Skills(){
  return <Section className="skills">
    {skills.map(({name, items})=>{
      return <div key={name} className="">
        <div className="font-bold text-2xl text-primary-500 my-5 cursor-pointer">{name}</div>
        <div className="mb-10">
          {items.map(item=><SkillItem {...item} key={item.label}/>)}
        </div>
      </div>
    })}
  </Section>
}
