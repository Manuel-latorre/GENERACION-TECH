import Lottie from 'lottie-react'

const LottieCards = ({imgService}) => {
  return (
    <div>
        <Lottie style={{width:250}} animationData={imgService} loop={true}/>
    </div>
  )
}

export default LottieCards;