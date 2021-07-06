import { parseDate } from "../../utils";

export default function Task(props){
  const {started, ended, title, description, index} = props
  return <div className="flex mb-5">
    <div className="text-primary-500 font-bold text-xl mr-5">
      {index + 1}.
    </div>
    <div>
      <div className="text-primary-500 font-bold text-2xl">{title}</div>
      <div className="mb-2 text-secondary-300">{parseDate(started)} - {ended ? parseDate(ended) : "Present"}</div>
      <div className="text-xl">
        {description}
      </div>
    </div>
  </div>
}