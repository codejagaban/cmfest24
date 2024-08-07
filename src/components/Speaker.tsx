import { Image } from 'astro:assets';

const Speaker = ({imageSrc, speakerName, tag, jobTitle} : {imageSrc: string; speakerName: string; tag: string; jobTitle: string}) => {
  return (
    <div className="">
        <Image src={imageSrc} alt={speakerName} className="object-contain" />
        <div className="">
            <span>{tag}</span>
            <p>{speakerName}</p>
            <span>{jobTitle}</span>
        </div>
    </div>
  )
}

export default Speaker;