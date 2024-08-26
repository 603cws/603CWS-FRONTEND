import Lottie from 'lottie-react';
import animationdata from "../../utils/askconfirm.json"

const AnimationComponentAsk = () => {
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

export default AnimationComponentAsk;
