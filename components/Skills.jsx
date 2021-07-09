import Image from 'next/image';
import { useContext } from "react";
import { RootContext } from "../contexts";
import Grid from "./Grid";
import Logos from "./Logos";
import Section from "./Section";
import Typography from './Typography';

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
          {data.skills.map(({name, items})=>{
            return <div key={name} className="m-2 bg-gradient-to-r hover:scale-105 transition duration-200 cursor-pointer transform from-secondary-800 via-secondary-800 to-secondary-900 bg-secondary-800 p-5 rounded">
              <Typography.H3>{name}</Typography.H3>
              <Logos items={items}/>
            </div>
          })}
        </Grid>
      </>
    }}
  </Section>
}
