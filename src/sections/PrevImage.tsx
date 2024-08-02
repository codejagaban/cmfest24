

const prevImages = [
  {
    imageSrc: "/assets/ImageOne.png",
    altText: "ImageOne",
  },
  {
    imageSrc: "/assets/ImageTwo.png",
    altText: "ImageTwo",
  },
  {
    imageSrc: "/assets/ImageThree.png",
    altText: "ImageThree",
  },
  {
    imageSrc: "/assets/ImageFour.png",
    altText: "ImageFour",
  },
  {
    imageSrc: "/assets/ImageFive.png",
    altText: "ImageFive",
  },
  {
    imageSrc: "/assets/ImageSix.png",
    altText: "ImageSix",
  },
  {
    imageSrc: "/assets/ImageSeven.png",
    altText: "ImageSeven",
  },
  {
    imageSrc: "/assets/ImageEight.png",
    altText: "ImageEight",
  },
  {
    imageSrc: "/assets/ImageNine.png",
    altText: "ImageNine",
  },
];

const firstColumn = prevImages.slice(0, 4);
const secondColumn = prevImages.slice(4, 9);

export default function PrevImage() {
  return (
    <div className="flex flex-col gap-2 w-full bg-bg-primary overflow-hidden">
      <div
        className="flex gap-1 w-full"
      >
        {firstColumn.map(({ imageSrc, altText }) => (
          <div key={altText} className="min-w-[25%]">
            <img
              src={imageSrc}
              alt={altText}
              className="w-full rounded-sm object-cover h-40 sm:h-60 md:h-80"
            />
          </div>
        ))}
      </div>
      <div
        className="flex gap-1 w-full"
      >
        {secondColumn.map(({ imageSrc, altText }) => (
          <div key={altText} className="min-w-[20%]">
            <img
              src={imageSrc}
              alt={altText}
              className="w-full rounded-sm object-cover h-40 sm:h-60 md:h-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
