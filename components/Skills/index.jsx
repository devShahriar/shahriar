import { skills } from "../../data.json";
import { getIcon, parseDate } from "../../utils";
import ProgressBar from "../ProgressBar";
import Section from "../Section";

function SkillItem(props){
  const {label, progress, tasks} = props;
  const icon = getIcon(props.icon ?? label)
  return <div className="text-secondary-100 mb-10" key={label}>
    <div className="flex mb-3 items-center">
      <span className="mr-5">{icon}</span>
      <span className="flex-grow text-lg">{label}</span>
      <ProgressBar progress={progress}/>
    </div>
    {tasks && tasks.map((task, index)=>{
      const {started, ended, title, description} = task
      return <div key={task.title+label} className="flex mb-5">
        <div className="text-primary-500 font-bold text-xl mr-5">
          {index + 1}.
        </div>
        <div>
          <div className="text-primary-500 font-bold text-2xl">{title}</div>
          <div className="mb-2 text-secondary-300">{parseDate(started)} - {parseDate(ended)}</div>
          <div className="text-xl">
            {description}
          </div>
        </div>
      </div>
    })}
  </div>
}

export default function Skills(){
  return <Section className="skills" header="Skills">
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
