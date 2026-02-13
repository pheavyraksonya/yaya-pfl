import { ArrowUpRight, Github } from "lucide-react";
import AnimateBorderButton from "../components/animatborderbutton";
const project = [
  {
    title: "ResumeAI",
    description: "scan resume for find the jop that fitting with you",
    img: "./project/resume.png",
    tag: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Cafora",
    description: "e commerce web app for order coffee",
    img: "./project/cafora.png",
    tag: ["React"],
    link: "#",
    github: "#",
  },
  {
    title: "ManageX",
    description: "task manager web app for manage your tasks",
    img: "./project/x.png",
    tag: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* header */}
        <div className="mx-auto text-center max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium font-mono tracking-wider uppercase">
            Feature Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delat-200 text-primary font-mono">
            Projects that{" "}
            <span className="text-white font-serif italic">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground font-mono animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
        {/* grid cols */}
        <div className="grid md:grid-cols-2 gap-8">
          {project.map((i, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/*img*/}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={i.img}
                  alt={i.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/*overlay*/}
                <div className="absolute inset-0 flex items-center transition-opacity duration-300 justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <a
                    href={i.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foregroun transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={i.github}
                    className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/*content*/}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold font-mono group-hover:text-primary transition-colors">
                    {i.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground
                   group-hover:text-primary group-hover:translate-x-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm font-mono">
                  {i.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {i.tag.map((i, idx) => (
                    <span
                      key={idx}
                      className="bg-surface px-4 py-1.5 rounded-full font-medium text-xs border text-muted-foreground
                       hover:text-primary hover:border-primary/50 transition-all duration-300 border-border/50 font-mono"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fadew-in animation-delay-500">
          <AnimateBorderButton>
            <span className="animate-pulse">See more</span>
            <ArrowUpRight className="w-5 h-5" />
          </AnimateBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Project;
