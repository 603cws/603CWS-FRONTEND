import Lottie from 'lottie-react';
import animationdata from "../../utils/Sorry.json"

const AnimationComponentSorry = () => {
  return (
    <div>
      <Lottie
        animationData={animationdata}
        loop={true}
        autoplay={true}
        style={{ width: 200, height: 200 }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </div>
  );
};

export default AnimationComponentSorry;
