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
  
  return <div className="flex my-5 flex-col usm:flex-row">
    <div className="mb-5 flex justify-center usm:mr-5" style={{width: 100, height: 100}}><img loading="lazy" alt={organization} src={thumbnail} /></div>
    <div>
      <Typography.H3>{role}</Typography.H3>
      <Typography.Body1>{organization}, {type}</Typography.Body1>
      <div className="flex items-center">
        <HiLocationMarker fill={colors.red[500]} size={20} className="mr-1 mb-1"/>
        <Typography.Body2 primary>{location}</Typography.Body2>
      </div>
      <Typography.Subtitle1>
        {parseDate(start_date)} - {end_date ? parseDate(end_date) : 'Present'}
      </Typography.Subtitle1>
      <Typography.OrderedList items={descriptions}/>
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

