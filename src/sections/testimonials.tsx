import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
const monial = [
  {
    quote:
      "If you don't like the road you're walking, start paving another one.",
    author: "Dolly Parton",
    role: "haha",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3EGaOLuq4BQgs7cVzSOw2nq8N77XrHzt-g&s",
  },
  {
    quote:
      "Technology is a word that describes something that doesn’t work yet.",
    author: "Douglas Adams",
    role: "haha",
    avatar:
      "https://www.muzines.co.uk/images_mag/articles/sos/SOS_87_07_douglas_adam_large.jpg",
  },
  {
    quote:
      "If you don't like the road you're walking, start paving another one.",
    author: "Dolly Parton",
    role: "haha",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3EGaOLuq4BQgs7cVzSOw2nq8N77XrHzt-g&s",
  },
  {
    quote:
      "Technology is a word that describes something that doesn’t work yet.",
    author: "Douglas Adams",
    role: "haha",
    avatar:
      "https://www.muzines.co.uk/images_mag/articles/sos/SOS_87_07_douglas_adam_large.jpg",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  function next() {
    setActive((prev) => (prev + 1) % monial.length);
  }

  function prev() {
    setActive((prev) => (prev - 1 + monial.length) % monial.length);
  }

  return (
    <section id="monial" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* header */}
        <div className="mx-auto text-center max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium font-mono tracking-wider uppercase">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delat-200 text-primary font-mono">
            Kind words from{" "}
            <span className="text-white font-serif italic">
              amazing people.
            </span>
          </h2>
          <p className="text-muted-foreground font-mono animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
        {/* monial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* main */}
            <div className="glass p-8 rounded-3xl md:p-12 animate-fade-in animation-delay-200 glow-border">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary justify-center flex items-center ">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
              <blockquote className="font-serif italic text-xl font-medium md:text-2xl leading-relaxed mb-8 pt-4">
                "{monial[active].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={monial[active].avatar}
                  alt={monial[active].author}
                  className="w-14 h-14 object-cover ring-2 ring-primary/20 rounded-full"
                />
                <div>
                  <div className="font-mono font-semibold">
                    {monial[active].author}
                  </div>
                  <div className="text-sm font-mono text-muted-foreground">
                    {monial[active].role}
                  </div>
                </div>
              </div>
            </div>
            {/* nav control*/}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronLeft />
              </button>
              <div className="flex gap-2">
                {monial.map((_, i) => (
                  <button
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
