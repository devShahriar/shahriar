import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { FiArrowLeftCircle } from "react-icons/fi";
import { Button, Logos, Typography, Wrapper } from "../../components";
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
      <div className="my-5 flex flex-col items-center">
        <Typography.H1>{course.title}</Typography.H1>
        <Logos items={course.topics} direction={"rows"}/>
          <Typography.Subtitle1>Starts at {course.start_date}</Typography.Subtitle1>
          <Typography.Link link={course.registration_link}>Registration Link</Typography.Link>
      </div>
      <div className="my-5 mb-10 flex justify-center">
        <div style={{
          height: 450,
          width: 750
        }}>
          {course.video_url ? 
          <iframe width="100%" height="100%" style={{objectFit: 'cover'}} src={course.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          : <img style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain'
          }} src={course.image_url} alt="Course image"/>}
        </div>
      </div>
      <Typography.Body1>{course.description}</Typography.Body1>
      <div className="my-5">
        <Typography.H2>Content</Typography.H2>
        {course.contents.map(({title, description}, index)=><div className="flex items-start mb-5" key={title}>
          <Typography.Body1 primary bold className="mr-3">{index+1}.</Typography.Body1>
          <div>
            <Typography.Body1 primary bold>{title}</Typography.Body1>
            <Typography.Body2>{description}</Typography.Body2>
          </div>
        </div>)}
      </div>
    </div>
  }else{
    content = <Typography.H1>Course not found !!!</Typography.H1>
  }
  return <Wrapper showNavbar={false}>
    {content}
  </Wrapper>
}

export default Course