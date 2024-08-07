import { useState } from "react";

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("Accordion clicked");
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="py-6 border-b border-bg-primary/30 cursor-pointer" onClick={handleClick}>
      <div className="flex items-center justify-between">
        <span className="flex-1 text-lg font-bold pr-3 block max-w-sm md:w-full">{question}</span>
        <img src="/chevron-down.svg" alt="Toggle" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      <div className={`transition-all duration-300 mt-2 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
