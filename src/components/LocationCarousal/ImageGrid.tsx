type ImageGridProps = {
  images: string[];
};
export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-[1.5fr,1fr] gap-1 lg:gap-3 h-full">
      <div className="grid grid-rows-[2fr,1fr] gap-1 lg:gap-3 h-full">
        <img
          src={images[0]}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />

        <div className="grid grid-cols-2 gap-1 lg:gap-3">
          <img
            src={images[1]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <img
            src={images[2]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="grid grid-rows-3 gap-1 lg:gap-3 h-full">
        <img
          src={images[3]}
          alt=""
          className="w-full max-h-56 h-full object-cover rounded-xl"
        />
        <img
          src={images[4]}
          alt=""
          className="w-full max-h-56 h-full object-cover rounded-xl"
        />
        <img
          src={images[5]}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
