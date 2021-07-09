import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { FiArrowLeftCircle } from "react-icons/fi";
import { Button, Typography, Wrapper } from "../../components";
import { RootContext } from '../../contexts';

const Course = () => {
  const {data} = useContext(RootContext);
  const router = useRouter()
  const { slug } = router.query
  const course = data.courses.find(course=>course.slug === slug) ?? null;
  
  let content = null;
  if(course){
    content = <div>
      <Button scaleOnHover className="absolute top-0 left-0" size={"medium"}><FiArrowLeftCircle size={20} className="mr-3"/><Link href={"/"}><span>Go Back</span></Link></Button>
      <div className="my-5 flex justify-center">
        <Typography.H1>{course.title}</Typography.H1>
      </div>
      <div className="my-5 flex justify-center">
        <div style={{
          height: 500,
          width: 500
        }}>
          {course.video_url ? <video style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain'
          }}>
            <source src={course.video_url} type="video/mp4"/>
          </video> : <img style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain'
          }} src={course.image_url} alt="Course image"/>}
        </div>
      </div>
      <Typography.Body1>{course.description}</Typography.Body1>
    </div>
  }else{
    content = <Typography.H1>Course not found !!!</Typography.H1>
  }
  return <Wrapper showNavbar={false}>
    {content}
  </Wrapper>
}

export default Course