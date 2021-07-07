import { useContext } from "react";
import { RootContext } from "../contexts";
import Grid from "./Grid";
import Section from "./Section";

function CourseItem(props){
  const {item} = props;
  return <div>
    <div className="">{item.title}</div>
    <div></div>
  </div>
}

export default function Courses(){
  const { data } = useContext(RootContext)

  return <Section header="Courses" name="Courses">
    <Grid>
      {data.courses.map((course) => <CourseItem key={course.title} item={course} />)}
    </Grid>
  </Section>
}