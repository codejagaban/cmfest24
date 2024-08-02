import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="flex flex-col gap-20 items-center justify-center bg-bg-primary h-[calc(100vh-100px)] relative z-10">
      <div className="container px-4 sm:px-6 md:px-10 flex flex-col items-center text-center max-w-3xl scale-105 md:scale-125">
        <div className="text-sm md:text-base font-semibold inline-flex bg-bg-secondary text-text-secondary rounded-lg px-3 md:px-6 py-1 tracking-tight">
          OCT 12, 2024 | ANY VENUE IN LAGOS SHA, NIGERIA
        </div>
        <div className="my-6 flex flex-col gap-2 items-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-white to-[#f1f1f1] bg-clip-text text-transparent">
            Community <br />
            Managers Festival
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-text-turquoise">
            #CMFEST24
          </h1>
        </div>
        <p className="text-base text-text-primary tracking-tight">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className="flex gap-1 items-center mt-[30px]">
          <Button
            body="Buy your Tickets"
            icon="/arrow_right_up.svg"
            className="bg-goldenrod text-text-secondary font-semibold px-4 py-2 border-none rounded-md"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <img
          src="/star1.svg"
          className="absolute w-6 h-6 top-20 left-20 animate-pulse"
          alt="Star 1"
        />
        <img
          src="/star2.svg"
          className="absolute w-10 h-10 top-60 left-10"
          alt="Star 2"
        />
        <img
          src="/star4.svg"
          className="absolute w-10 h-10 bottom-10 right-20 animate-bounce"
          alt="Star 4"
        />
        <img
          src="/star5.svg"
          className="absolute w-10 h-10 bottom-20 left-20 animate-pulse"
          alt="Star 5"
        />
        <img
          src="/star6.svg"
          className="absolute w-8 h-8 bottom-80 right-10 animate-pulse"
          alt="Star 6"
        />
      </div>
    </section>
  );
}
