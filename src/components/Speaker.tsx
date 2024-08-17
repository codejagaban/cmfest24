import { Image } from 'astro:assets';

const Speaker = ({imageSrc, speakerName, tag, jobTitle} : {imageSrc: string; speakerName: string; tag: string; jobTitle: string}) => {
  return (
    <div className="">
        <img src={imageSrc} alt={speakerName} className="object-contain" />
        <div className="pt-3 flex flex-col gap-1 items-start">
            <span className='text-xs text-bg-primary uppercase'>{tag}</span>
            <p className='font-medium text-bg-primary sm:text-lg tracking-wide'>{speakerName}</p>
            <span className='text-xs font-medium text-bg-primary'>{jobTitle}</span>
        </div>
    </div>
  )
}

export default Speaker;