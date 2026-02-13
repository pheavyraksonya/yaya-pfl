const exp = [
  {
    period: "2023 - Present",
    company: "Google",
    role: "Software Engineer",
    location: "Mountain View, CA",
    description:
      "lorem20jhkjh gkjh kjhg dfjkgh jh jghjdkf. gdkg hdgkg hkjghdkg. hkhghdgl kdhkr ghr3ik h 3kt tk kthek t4th 34 3t k3u 3th3k4u ty4 ty34iuy34",
    tech: ["React", "Node.js", "MongoDB"],
    current: true,
  },
  {
    period: "2022 - 2023",
    company: "Google",
    role: "Software Engineer",
    location: "Mountain View, CA",
    description:
      "lorem20jhkjh gkjh kjhg dfjkgh jh jghjdkf. gdkg hdgkg hkjghdkg. hkhghdgl kdhkr ghr3ik h 3kt tk kthek t4th 34 3t k3u 3th3k4u ty4 ty34iuy34",
    tech: ["React", "Node.js", "MongoDB"],
    current: false,
  },
  {
    period: "2023 - 2024",
    company: "Google",
    role: "Software Engineer",
    location: "Mountain View, CA",
    description:
      "lorem20jhkjh gkjh kjhg dfjkgh jh jghjdkf. gdkg hdgkg hkjghdkg. hkhghdgl kdhkr ghr3ik h 3kt tk kthek t4th 34 3t k3u 3th3k4u ty4 ty34iuy34",
    tech: ["React", "Node.js", "MongoDB"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6 z-10 relative">
        {/*header*/}
        <div className="max-w-3xl mb-16">
          <span className="font-mono tracking-wider uppercase text-secondary-foreground text-sm font-medium">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono animate-fade-in animaiton-delay-200 text-primary mt-4 mb-6">
            Experience that{" "}
            <span className="text-white font-serif italic">
              speaks volumes.
            </span>
          </h2>
          <p className="font-mono text-muted-foreground animate-fade-in animation-delay-300">
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>
        {/* timeline */}
        <div className="relative">
          <div
            className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b 
          from-primary/50 via-primary/30 to-transparent md:-translate-x-1/2 shadow=[0_0_25px_rgba(32,178,166,0.8)]"
          />
          {/* exp item */}
          <div className="space-y-12">
            {exp.map((i, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* dot */}
                <div
                  className="absolute left-0 md:left-1/2 ring-4 ring-background z-10 top-0 w-3 h-3 bg-primary 
                rounded-full  -translate-x-1/2"
                >
                  {i.current && (
                    <span className="absolute inset-0 rounded-full opacity-75 animate-ping bg-primary" />
                  )}
                </div>

                {/*content*/}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border hover:border-primary/60 trensition-all duration-500 border-primary/30`}
                  >
                    <div className="text-primary text-sm font-mono font-medium">
                      {i.period}
                    </div>
                    <h3 className="text-xl font-semibold mt-2 font-mono">
                      {i.role}
                    </h3>
                    <p className="text-muted-foreground font-mono">
                      {i.company}
                    </p>
                    <p className="text-sm text-muted-foreground font-mono mt-4">
                      {i.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {i.tech.map((i, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground font-mono"
                        >
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
