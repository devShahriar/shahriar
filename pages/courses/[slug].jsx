import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Typography, Wrapper } from "../../components";
import { RootContext } from '../../contexts';

const Course = () => {
  const {data} = useContext(RootContext);
  const router = useRouter()
  const { slug } = router.query
  const course = data.courses.find(course=>course.slug === slug) ?? null;
  
  let content = null;
  if(course){
    content = <Typography.H1>{course.title}</Typography.H1>
  }else{
    content = <Typography.H1>Course not found !!!</Typography.H1>
  }
  return <Wrapper showNavbar={false}>
    {content}
  </Wrapper>
}

export default Course