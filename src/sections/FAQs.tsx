import AccordionItem from "../components/AccordionItem";


const items = [
  {
    question: "Who is CMFest for?",
    answer:
      "It’s for you. Whether you're a community manager, business leader, or someone passionate about building thriving communities, CMFEST is for you! ",
  },
  {
    question: "I want to send my entire team, will there be discounts?",
    answer:
      "Absolutely! The more, the merrier. We’ve got special discounts for teams—just reach out to us at hi@cmfest.africa, and we’ll hook you up",
  },
  {
    question:
      "Will CMFEST be held in-person or online?",
    answer:
      "Both!  You can join us in-person in Lagos or tune in from anywhere in the world online. Whether you’re on-site or at home in your pajamas, you’re in for a great time",
  },
  {
    question:
      "How can I chat with the team about other ways to support the festival?",
    answer:
      "We’d love to hear from you!  Whether it’s sponsorship, partnerships, or other fun ideas, send us a message at partnership@cmfest.africa, and we’ll make magic happen together.",
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
