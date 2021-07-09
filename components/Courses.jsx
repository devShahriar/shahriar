import { useContext } from "react";
import { RootContext } from "../contexts";
import Button from "./Button";
import Card from "./Card";
import Grid from "./Grid";
import Logos from "./Logos";
import Section from "./Section";
import Typography from "./Typography";

function CourseItem(props){
  const {item} = props;
  return <div>
    <div className="mb-3">
      <Logos items={item.topics} direction={"rows"}/>
    </div>
    <div className="my-5">
      <img src={item.image_url} alt={"Image"}/>
    </div>
    <Typography.Body2>
      {item.description}
    </Typography.Body2>
    <div className="flex items-center justify-center">
      <Button size="medium" scaleOnHover>
        View details
      </Button>
    </div>
  </div>
}

export default function Courses(){
  const { data } = useContext(RootContext)

  return <Section header="Courses" name="Courses">
    <Grid>
      {data.courses.map((course) => <Card scaleOnHover={false} key={course.title} header={course.title} content={<CourseItem item={course} />}/>)}
    </Grid>
  </Section>
}