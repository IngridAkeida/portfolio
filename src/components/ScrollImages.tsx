import Image from "next/image";

const ScrollingImages = () => {
  return (
    <div className="flex overflow-x-auto scroll-snap-type-x mandatory">
      <Image
        className="scroll-snap-align-start h-64 w-64 flex-shrink-0 mr-4"
        src="/image1.jpg"
        alt="Image 1"
        width={64}
        height={64}
      />
      <Image
        className="scroll-snap-align-start h-64 w-64 flex-shrink-0 mr-4"
        src="/image2.jpg"
        alt="Image 2"
        width={64}
        height={64}
      />
      <Image
        className="scroll-snap-align-start h-64 w-64 flex-shrink-0 mr-4"
        src="/image3.jpg"
        alt="Image 3"
        width={64}
        height={64}
      />
      {/* Add more images as needed */}
    </div>
  );
};

export default ScrollingImages;