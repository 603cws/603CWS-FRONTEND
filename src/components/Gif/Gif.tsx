import Lottie from 'lottie-react';
import animationdata from "../../utils/gif.json"

const AnimationComponent = () => {
  return (
    <div>
      <Lottie
        animationData={animationdata}
        loop={true}
        autoplay={true}
        style={{ width: 150, height: 150 }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </div>
  );
};

export default AnimationComponent;
