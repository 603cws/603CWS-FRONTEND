import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

type ImageGridProps = {
  images: string[];
};
export default function ImageGrid({ images }: ImageGridProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const prevImage = () =>
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const nextImage = () =>
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 1));
  const resetZoom = () => setZoom(1);
  const handleWheel = (e: React.WheelEvent) =>
    setZoom((z) => Math.min(3, Math.max(1, z + (e.deltaY < 0 ? 0.1 : -0.1))));

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    setZoom(1);
  }, [activeIndex]);

  return (
    <>
      <div className="grid grid-cols-[1.5fr,1fr] gap-1 lg:gap-3 h-full lg:min-h-0">
        <div className="grid grid-rows-[2fr,1fr] gap-1 lg:gap-3 h-full max-h-[700px] lg:min-h-0">
          <img
            src={images[0]}
            alt="office-image"
            onClick={() => openModal(0)}
            className="w-full h-full object-cover rounded-xl max-h-[450px] lg:min-h-0 cursor-pointer"
          />
          <div className="grid grid-cols-2 gap-1 lg:gap-3 lg:min-h-0">
            <img
              src={images[1]}
              alt="office-image"
              onClick={() => openModal(1)}
              className="w-full h-full object-cover rounded-xl lg:min-h-0 cursor-pointer"
            />
            <img
              src={images[2]}
              alt="office-image"
              onClick={() => openModal(2)}
              className="w-full h-full object-cover rounded-xl lg:min-h-0 cursor-pointer"
            />
          </div>
        </div>

        <div className="grid grid-rows-3 gap-1 lg:gap-3 h-full max-h-[700px] lg:min-h-0">
          <img
            src={images[3]}
            alt="office-image"
            onClick={() => openModal(3)}
            className="w-full max-h-56 h-full object-cover rounded-xl lg:min-h-0 cursor-pointer"
          />
          <img
            src={images[4]}
            alt="office-image"
            onClick={() => openModal(4)}
            className="w-full max-h-56 h-full object-cover rounded-xl lg:min-h-0 cursor-pointer"
          />
          <img
            src={images[5]}
            alt="office-image"
            onClick={() => openModal(5)}
            className="w-full h-full object-cover rounded-xl lg:min-h-0 cursor-pointer"
          />
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="absolute bottom-6 flex gap-4 bg-black/60 px-4 py-2 rounded-full">
            <button onClick={zoomOut} className="text-white text-xl">
              −
            </button>
            <button onClick={resetZoom} className="text-white text-sm">
              Reset
            </button>
            <button onClick={zoomIn} className="text-white text-xl">
              +
            </button>
          </div>
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white lg:text-2xl"
          >
            <FaTimes />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-10 text-white lg:text-3xl"
          >
            <FaChevronLeft />
          </button>
          <div
            onWheel={handleWheel}
            className="relative overflow-hidden max-h-[80vh] max-w-[80vw]"
          >
            <img
              src={images[activeIndex]}
              alt="preview"
              style={{ transform: `scale(${zoom})` }}
              className="object-contain transition-transform duration-200 cursor-zoom-in"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 text-white lg:text-3xl"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
}
