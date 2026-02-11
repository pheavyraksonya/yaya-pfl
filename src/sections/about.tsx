import { Code2, Lightbulb, Rocket, User } from "lucide-react";

const highlight = [
  {
    icon: Code2,
    title: "Clean Code",
    desciption:
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
      <div>
        <div>
          {/* left */}
          <div>
            <span>About Me</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
