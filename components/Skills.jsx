import Image from 'next/image';
import { useContext } from "react";
import { RootContext } from "../contexts";
import Card from "./Card";
import Grid from "./Grid";
import Logos from "./Logos";
import Section from "./Section";

export default function Skills(){
  const {data} = useContext(RootContext)
  return <Section header="Skills" name="Skills">  
    {({isCurrentlyActive})=>{
      return <>
        <div className="flex justify-center animate-slow-bounce">
          <Image
            src="/tech_stack.svg"
            alt="Tech Stack"
            width="350"
            height="350"
          />
        </div>
        <Grid fullWidth>
          {data.skills.map(({name, items})=><Card key={name} header={name} content={<Logos items={items}/>}/>)}
        </Grid>
      </>
    }}
  </Section>
}
