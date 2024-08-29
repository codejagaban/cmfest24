import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 25 },
  };

  return (
    <header className="sticky top-0 bg-bg-primary h-24 z-50 flex items-center">
      <div className="container py-10 mx-auto max-w-7xl px-3 sm:px-6 md:px-10">
        <div className="flex items-center justify-between">
          <img src="/Logos.svg" alt="CMFest Africa" height={120} width={120} />
          <div
            onClick={() => setToggle(!toggle)}
            className="lg:hidden space-y-1 cursor-pointer mr-1"
          >
            <img
              src="/menu.svg"
              alt="Menu"
              className="text-white"
              height={30}
              width={30}
            />
          </div>
          <AnimatePresence>
            {toggle && (
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={variants}
                className="z-50 fixed flex flex-col items-center justify-center gap-16 bg-bg-primary text-base text-teal-50 top-0 left-0 w-full h-screen md:hidden"
              >
                <div className="absolute top-12 right-4">
                  <div
                    onClick={() => setToggle(false)}
                    className="cursor-pointer mr-1"
                  >
                    <img
                      src="/close.svg"
                      alt="Close"
                      className="text-white"
                      height={24}
                      width={24}
                    />
                  </div>
                </div>
                <a href="#about" onClick={() => setToggle(false)}>
                  About
                </a>
                <a href="#sponsors" onClick={() => setToggle(false)}>
                  Sponsors
                </a>
                <a href="#speakers" onClick={() => setToggle(false)}>
                  Speakers
                </a>
                <a href="#agenda" onClick={() => setToggle(false)}>
                  Agenda
                </a>
                <a href="#faq" onClick={() => setToggle(false)}>
                  FAQ
                </a>
                <Button
                  body="Buy your Tickets"
                  onClick={() => setToggle(false)}
                  iconClassName="text-text-secondary font-bold"
                  className="bg-goldenrod text-text-secondary font-bold"
                />
              </motion.nav>
            )}
          </AnimatePresence>
          <nav className="hidden lg:flex items-center gap-10 text-text-primary text-sm">
            <a href="#about">About</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#speakers">Speakers</a>
            <a href="#agenda">Agenda</a>
            <a href="#faq">FAQ</a>
            <Button
              body="Buy Tickets"
              onClick={() => setToggle(false)}
              iconClassName="text-white"
              className="bg-transparent text-white font-bold"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
