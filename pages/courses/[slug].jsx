import { useRouter } from 'next/router'

const Course = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>Course: {slug}</p>
}

export default Course