import { useContext } from "react";
import { RootContext } from "../../contexts";
import { getIcon } from "../../utils";
import Section from "../Section";

function SkillItem(props){
  const {label, progress, tasks} = props;
  const icon = getIcon(props.icon ?? label)
  return <div className="text-secondary-100 mb-10" key={label}>
    <div className="flex mb-3 items-center">
      <span className="mr-5">{icon}</span>
      <span className="flex-grow text-lg">{label}</span>
    </div>
    {tasks && tasks.map((task, index)=><div className="text-primary-500 text-lg font-bold my-1 ml-3 flex items-start" key={task+label+index}>
      <div className="mr-3">{index + 1}.</div>
      <div>{task}</div>
    </div>)}
  </div>
}

export default function Skills(){
  const {data} = useContext(RootContext)
  return <Section className="skills" header="Skills">
    <div className="grid grid-cols-5">
      {data.skills.map(({name, items})=>{
        return <div key={name} className="">
          <div className="font-bold text-2xl text-primary-500 my-5">{name}</div>
          <div className="mb-10 pr-4">
            {items.map(item=><SkillItem {...item} key={item.label}/>)}
          </div>
        </div>
      })}
    </div>
  </Section>
}
