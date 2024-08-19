import Speaker from "../components/Speaker";
import preciousImage from "../images/precious.png";
import felixImage from "../images/felix.png";
import adaImage from "../images/ada.jpg";

const speakers = [
  {
    imageSrc: preciousImage.src,
    speakerName: "Precious Ezema",
    jobTitle: "Community Manager",
    tag: "Speaker",
    index: 1,
  },
  {
    imageSrc: felixImage.src,
    speakerName: "Felix Ayoola",
    jobTitle: "Developer Advocate",
    tag: "Speaker",
    index: 2,
  },
  {
    imageSrc: adaImage.src,
    speakerName: "Ada Nduka Uyom",
    jobTitle: "Founder, SheCodeAfrica",
    tag: "Speaker",
    index: 3,
  },
  {
    imageSrc: preciousImage.src,
    speakerName: "Precious Ezema",
    jobTitle: "Community Manager",
    tag: "Speaker",
    index: 4,
  },
  {
    imageSrc: preciousImage.src,
    speakerName: "Precious Ezema",
    jobTitle: "Community Manager",
    tag: "Speaker",
    index: 5,
  },
  {
    imageSrc: felixImage.src,
    speakerName: "Felix Ayoola",
    jobTitle: "Developer Advocate",
    tag: "Speaker",
    index: 6,
  },
  {
    imageSrc: adaImage.src,
    speakerName: "Ada Nduka Uyom",
    jobTitle: "Founder, SheCodeAfrica",
    tag: "Speaker",
    index: 7,
  },
  {
    imageSrc: preciousImage.src,
    speakerName: "Precious Ezema",
    jobTitle: "Community Manager",
    tag: "Speaker",
    index: 8,
  },
];

const Speakers = () => {
  return (
    <section className="container grid grid-cols-1 py-20 mx-auto max-w-7xl w-full px-3 sm:px-6 md:px-10 text-bg-primary">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tighter text-bg-primary">
            Our Rock-star Speakers & Panelist
          </h2>
          <p className="text-xs sm:text-sm text-bg-primary">
            Meet the keynote speakers & panelist for this year&apos;s #CMFEST
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-4 w-full">
          {speakers.map(({ speakerName, imageSrc, jobTitle, tag, index }) => (
            <Speaker
              key={index}
              speakerName={speakerName}
              imageSrc={imageSrc}
              jobTitle={jobTitle}
              tag={tag}
            />
          ))}
        </div>
    </section>
  );
};

export default Speakers;
