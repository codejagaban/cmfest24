import AccordionItem from "../components/AccordionItem";


const items = [
  {
    question: "Who is CMFest for?",
    answer:
      "CMFest is Africa's largest festival for community builders in Africa. It’s also for leaders building community-driven brands and anyone interested in the community industry.",
  },
  {
    question: "I want to send my entire team, will there be discounts?",
    answer:
      "CMFest is Africa's largest festival for community builders in Africa. It’s also for leaders building community-driven brands and anyone interested in the community industry.",
  },
  {
    question:
      "I’d love to chat with the team on other ways to support the festival, how can I do that?",
    answer:
      "CMFest is Africa's largest festival for community builders in Africa. It’s also for leaders building community-driven brands and anyone interested in the community industry.",
  },
  {
    question:
      "I’d love to chat with the team on other ways to support the festival, how can I do that?",
    answer:
      "CMFest is Africa's largest festival for community builders in Africa. It’s also for leaders building community-driven brands and anyone interested in the community industry.",
  },
  {
    question: "I’d love to hear more about CMFest, how can I do that?",
    answer:
      "CMFest is Africa's largest festival for community builders in Africa. It’s also for leaders building community-driven brands and anyone interested in the community industry.",
  },
];

const FAQs = () => {
  return (
    <section id="faq" className="container flex items-center justify-between py-20 mx-auto max-w-7xl px-3 sm:px-6 md:px-10 text-bg-primary">
      <div className="container">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter">FAQs</h2>
        <div className="mt-8">
          {items.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
