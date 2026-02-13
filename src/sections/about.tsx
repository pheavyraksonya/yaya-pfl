import { Code2, Lightbulb, Rocket, User } from "lucide-react";

const highlight = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing code for maximum speed and efficiency.",
  },
  {
    icon: User,
    title: "Collaboration",
    description: "Working collaboratively with cross-functional teams.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          {/* left */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium font-mono tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in font-mono text-secondary-foreground animation-delay-100">
              Building the future,
              <span className="text-white font-serif italic">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 font-mono">
              <p>
                I'm a passionate software engineer with over 5 years of
                experience crafting digital products that make a difference. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep expertise in modern frontend
                technologies.
              </p>
              <p>
                I specialize in React, Next.js, and TypeScript, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
            <div className="rounded-2xl relative glass glow-border animate-fasde-in animation-delay-300 p-6">
              <p className="font-medium font-serif italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>
          {/* right */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlight.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl animate-fade-in glass p-6"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className=" text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-medium ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
