import { useRouter } from 'next/router';
import { useContext } from 'react';
import { RootContext } from '../../contexts';

const Course = () => {
  const {data} = useContext(RootContext);
  const router = useRouter()
  const { slug } = router.query

  return <p>Course: {slug}</p>
}

export default Course