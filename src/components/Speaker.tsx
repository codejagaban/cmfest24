import { motion } from "framer-motion";

const Speaker = ({
  imageSrc,
  speakerName,
  tag,
  jobTitle,
  linkedinProfile,
  xProfile,
}: {
  imageSrc: string;
  speakerName: string;
  tag: string;
  jobTitle: string;
  linkedinProfile: string;
  xProfile: string;
}) => {
  return (
    <div className="">
      <div className="relative group w-full">
        <img src={imageSrc} alt={speakerName} className="object-contain w-full" />
        <motion.div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-3 mt-2">
            <a
              href={linkedinProfile}
              className="text-white hover:text-gray-300"
            >
              LN
            </a>
            <a href={xProfile} className="text-white hover:text-gray-300">
              X
            </a>
          </div>
        </motion.div>
      </div>
      <div className="pt-3 flex flex-col gap-1 items-start">
        <span className="text-xs text-bg-primary uppercase">{tag}</span>
        <p className="font-medium text-bg-primary sm:text-lg tracking-wide">
          {speakerName}
        </p>
        <span className="text-sm font-medium text-bg-primary">{jobTitle}</span>
      </div>
    </div>
  );
};

export default Speaker;
