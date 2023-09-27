import Lottie from 'lottie-react'
import about from '../../assets/about.json'
// import img from "./pc.png"
import img from '../../assets/note.png'
import './Lottie.css'

const About = () => {
  return (
    <div>
        <img src={img} alt="" className='pcLottie'/>
    </div>
  )
}

export default About;