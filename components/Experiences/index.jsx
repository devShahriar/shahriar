import { useContext } from "react";
import { HiLocationMarker } from "react-icons/hi";
import colors from "tailwindcss/colors";
import { RootContext } from "../../contexts";
import { parseDate } from "../../utils";
import Section from "../Section";

function ExperienceItem(props) {
  const {
    item: { 
      organization,
      role,
      type,
      startDate,
      endDate,
      thumbnail,
      descriptions,
      location 
    }
  } = props;

  return <div className="flex mr-5 my-5">
    <div className="mr-5"><img alt={organization} src={thumbnail} width={100} height={100} /></div>
    <div>
      <div className="font-extrabold text-2xl text-primary-500 mb-1">{role}</div>
      <div className="font-bold text-xl mb-1 text-secondary-300">{organization}, {type}</div>
      <div className="flex items-center"><HiLocationMarker fill={colors.red[500]} className="mr-1"/><span className="text-primary-500 text-base">{location}</span></div>
      <div className="text-secondary-400 text-base my-2">{parseDate(startDate)} - {endDate ? parseDate(endDate) : 'Present'}</div>
      <ol className="text-secondary-200 list-inside list-decimal text-lg">{
        descriptions.map(description=><li key={description}>{description}</li>)
      }</ol>
    </div>
  </div>
}

export default function Experiences() {
  const { data } = useContext(RootContext)
  return <Section header="Experiences" name="Experiences">
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {data.experiences.map((experience, index) => <ExperienceItem key={experience.organization + experience.role + experience.type+index} item={experience} />)}
    </div>
  </Section>
}

