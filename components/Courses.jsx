import Link from 'next/link';
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
  return <div className="flex flex-col">
    <Logos items={item.topics} direction={"rows"}/>
    <div className="my-5 flex" style={{height: 250}}>
      <img loading="lazy" className="object-scale-down w-full" src={item.image_url} alt={"Image"}/>
    </div>
    <Typography.Body2>
      {item.short_description}
    </Typography.Body2>
    <div className="flex items-center justify-center justify-end">
      <Button size="medium" scaleOnHover className={"mb-0"}>
        <Link href={`/courses/${item.slug}`}>
          View details
        </Link>
      </Button>
    </div>
  </div>
}

export default function Courses(){
  const { data } = useContext(RootContext)

  return <Section header="Courses" name="Courses">
    <Grid>
      {Array.from(data.courses.values()).map((course) => <Card classNames={{header: 'uppercase'}} headerElement='H2' scaleOnHover={false} key={course.title} header={course.title} content={<CourseItem item={course} />}/>)}
    </Grid>
  </Section>
}