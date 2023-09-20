import Lottie from 'lottie-react'
import about from '../../assets/about.json'

const About = () => {
  return (
    <div>
        <Lottie style={{width: 500}} animationData={about} loop={true}/>
    </div>
  )
}

export default About;