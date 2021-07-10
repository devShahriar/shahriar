import { useContext } from "react";
import { RootContext } from "../contexts";
import Card from "./Card";
import Grid from "./Grid";
import Logos from "./Logos";
import Section from "./Section";

export default function Skills(){
  const {data} = useContext(RootContext)
  return <Section header="Skills" name="Skills">  
    <div className="flex justify-center animate-slow-bounce my-5">
      <img src="/tech_stack.svg"
        alt="Tech Stack"
        width="500"
        height="500"
        loading="lazy"
      />
    </div>
    <Grid className={'xl:grid-cols-6'}>
      {data.skills.map(({name, items})=><Card key={name} header={name} content={<Logos items={items}/>}/>)}
    </Grid>
  </Section>
}
