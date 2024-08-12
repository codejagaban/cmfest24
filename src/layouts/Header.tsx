import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 25 },
  };

  return (
    <header className="sticky top-0 bg-bg-primary h-24 backdrop-blur-md z-50">
      <div className="container py-10 mx-auto max-w-7xl px-3 sm:px-6 md:px-10">
        <div className="flex items-center justify-between">
          <img src="/Logos.svg" alt="CMFest Africa" height={120} width={120} />
          <div
            onClick={() => setToggle(!toggle)}
            className="bg-white p-2 rounded-md lg:hidden space-y-1 cursor-pointer"
          >
            <span className="block h-[3px] w-8 bg-goldenrod"></span>
            <span className="block h-[3px] w-6 bg-goldenrod"></span>
            <span className="block h-[3px] w-4 bg-goldenrod"></span>
          </div>
          <AnimatePresence>
            {toggle && (
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={variants}
                className="z-50 fixed flex flex-col items-center justify-center gap-10 bg-bg-primary text-teal-50 top-0 left-0 w-full h-screen md:hidden"
              >
                <div className="absolute top-12 right-4">
                  <div
                    onClick={() => setToggle(false)}
                    className="bg-white px-2 py-4 rounded-md cursor-pointer"
                  >
                    <span className="block h-[2px] w-6 border-2 border-goldenrod bg-goldenrod rotate-45 transform"></span>
                    <span className="block h-[2px] w-6 bg-goldenrod -rotate-45 transform -translate-y-[3px]"></span>
                  </div>
                </div>
                <a href="#" onClick={() => setToggle(false)}>
                  About
                </a>
                <a href="#" onClick={() => setToggle(false)}>
                  Sponsors
                </a>
                <a href="#" onClick={() => setToggle(false)}>
                  Speakers
                </a>
                <a href="#" onClick={() => setToggle(false)}>
                  Agenda
                </a>
                <a href="#faq" onClick={() => setToggle(false)}>
                  FAQ
                </a>
                <a href="#" onClick={() => setToggle(false)}>
                  Buy Tickets <span>&rarr;</span>
                </a>
              </motion.nav>
            )}
          </AnimatePresence>
          <nav className="hidden lg:flex items-center gap-6 text-text-primary text-base">
            <a href="#">About</a>
            <a href="#">Sponsors</a>
            <a href="#">Speakers</a>
            <a href="#">Agenda</a>
            <a href="#" className="flex items-center gap-1">
              Buy Tickets <span>&#8599;</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
