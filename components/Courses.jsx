import { useContext } from "react";
import { RootContext } from "../contexts";
import Grid from "./Grid";
import Logos from "./Logos";
import Section from "./Section";
import Typography from "./Typography";

function CourseItem(props){
  const {item} = props;
  return <div>
    <Typography.H2>{item.title}</Typography.H2>
    <div>
      <Logos items={item.topics} direction={"rows"}/>
    </div>
    <div>
      <img src={item.image_url} alt={"Image"}/>
    </div>
    <Typography.Body1>
      {item.description}
    </Typography.Body1>
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