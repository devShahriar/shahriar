import { useContext } from "react";
import { RootContext } from "../../contexts";
import Section from "../Section";

export default function Experiences(){
  const {data} = useContext(RootContext)
  return <Section className="experiences" header="Experiences" name="Experiences">
    {data.experiences.map(experience=><div key={experience.organization}>{experience.organization}</div>)}
  </Section>
}