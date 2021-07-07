import { useContext } from "react";
import { RootContext } from "../../contexts";
import Section from "../Section";

function CourseItem(props){
  const {item} = props;
  return <div>{item.title}</div>
}

export default function Courses(){
  const { data } = useContext(RootContext)

  return <Section header="Courses" name="Courses">
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {data.courses.map((course) => <CourseItem key={course.title} item={course} />)}
    </div>
  </Section>
}