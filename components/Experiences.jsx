import { useContext } from "react";
import { HiLocationMarker } from "react-icons/hi";
import colors from "tailwindcss/colors";
import { RootContext } from "../contexts";
import { parseDate } from "../utils";
import Grid from "./Grid";
import Section from "./Section";
import Typography from "./Typography";

function ExperienceItem(props) {
  const {
    item: { 
      organization,
      role,
      type,
      start_date,
      end_date,
      thumbnail,
      descriptions,
      location 
    }
  } = props;

  return <div className="flex mr-5 my-5">
    <div className="mr-5"><img alt={organization} src={thumbnail} width={100} height={100} /></div>
    <div>
      <Typography.H3>{role}</Typography.H3>
      <Typography.Body1>{organization}, {type}</Typography.Body1>
      <div className="flex items-center"><HiLocationMarker fill={colors.red[500]} className="mr-1"/><span className="text-primary-500 text-base">{location}</span></div>
      <div className="text-secondary-400 text-base my-2">{parseDate(start_date)} - {end_date ? parseDate(end_date) : 'Present'}</div>
      <ol className="text-secondary-200 list-inside list-decimal text-lg">{
        descriptions.map(description=><li key={description}>{description}</li>)
      }</ol>
    </div>
  </div>
}

export default function Experiences() {
  const { data } = useContext(RootContext)
  return <Section header="Experiences" name="Experiences">
    <Grid>
      {data.experiences.map((experience, index) => <ExperienceItem key={experience.organization + experience.role + experience.type+index} item={experience} />)}
    </Grid>
  </Section>
}

