import { useScramble } from "use-scramble";
//Making the component reusable
const Scramble = (prop: any) => {
  let classnm = "text-gray-200 font-sans font-extrabold text-3xl md:text-5xl ";
  // let classnm = "text-gray-700 font-sans font-extrabold text-3xl md:text-5xl ";
  let speed = 0.2;
  if (prop.speed) {
    speed = Number(prop.speed);
  }
  const { ref } = useScramble({
    text: `${prop.totype}`,
    speed: Number(speed),
  });

  if (prop.className) {
    classnm = prop.className;
  }
  return (
    <div>
      <p ref={ref} className={classnm} />
    </div>
  );
};

export default Scramble;
