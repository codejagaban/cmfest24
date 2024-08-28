import { motion } from 'framer-motion';
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
    linkedinProfile: 'https://linkedin.com/profile',
    xProfile: 'https://x.com/@me',
    index: 1,
  },
  {
    imageSrc: felixImage.src,
    speakerName: "Felix Ayoola",
    jobTitle: "Developer Advocate",
    tag: "Speaker",
    linkedinProfile: 'https://linkedin.com/profile',
    xProfile: 'https://x.com/@me',
    index: 2,
  },
  {
    imageSrc: adaImage.src,
    speakerName: "Ada Nduka Uyom",
    jobTitle: "Founder, SheCodeAfrica",
    tag: "Speaker",
    linkedinProfile: 'https://linkedin.com/profile',
    xProfile: 'https://x.com/@me',
    index: 3,
  },
  {
    imageSrc: preciousImage.src,
    speakerName: "Precious Ezema",
    jobTitle: "Community Manager",
    tag: "Speaker",
    linkedinProfile: 'https://linkedin.com/profile',
    xProfile: 'https://x.com/@me',
    index: 4,
  },
  {
    imageSrc: preciousImage.src,
    speakerName: "Precious Ezema",
    jobTitle: "Community Manager",
    tag: "Speaker",
    linkedinProfile: 'https://linkedin.com/profile',
    xProfile: 'https://x.com/@me',
    index: 5,
  },
  {
    imageSrc: felixImage.src,
    speakerName: "Felix Ayoola",
    jobTitle: "Developer Advocate",
    tag: "Speaker",
    linkedinProfile: 'https://linkedin.com/profile',
    xProfile: 'https://x.com/@me',
    index: 6,
  },
  {
    imageSrc: adaImage.src,
    speakerName: "Ada Nduka Uyom",
    jobTitle: "Founder, SheCodeAfrica",
    tag: "Speaker",
    linkedinProfile: 'https://linkedin.com/profile',
    xProfile: 'https://x.com/@me',
    index: 7,
  },
  {
    imageSrc: preciousImage.src,
    speakerName: "Precious Ezema",
    jobTitle: "Community Manager",
    tag: "Speaker",
    linkedinProfile: 'https://linkedin.com/profile',
    xProfile: 'https://x.com/@me',
    index: 8,
  },
];

const Speakers = () => {
  return (
    <section id='speakers' className="container grid grid-cols-1 py-20 mx-auto max-w-7xl w-full px-3 sm:px-6 md:px-10 text-bg-primary">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-bg-primary">
          Our Rock-star Speakers & Panelist
        </h2>
        <p className="text-base sm:text-base text-bg-primary">
          Meet the keynote speakers & panelist for this year&apos;s #CMFEST
        </p>
      </div>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-4 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {speakers.map(({ speakerName, imageSrc, jobTitle, tag, linkedinProfile, xProfile, index }) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <Speaker
              speakerName={speakerName}
              imageSrc={imageSrc}
              jobTitle={jobTitle}
              tag={tag}
              linkedinProfile={linkedinProfile}
              xProfile={xProfile}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Speakers;
