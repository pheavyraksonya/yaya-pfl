import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/pheavyraksonya", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pheavyraksonya-sean-16932a373/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/phean0u/?hl=en",
    label: "Instagram",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          {/* logo  */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="tracking-tight font-bold hover:text-primary text-xl"
            >
              YAYa<span className="text-primary">.</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground font-mono">
              © {currentyear} Pheavyraksonya Sean. All rights reserved.
            </p>
          </div>
          {/* linlk */}
          <nav className="flex items-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-sm text-muted-foreground font-mono hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {}
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                aria-label={link.label}
                className="glass hover:text-primary hover:bg-primary/10 transition-all rounded-full p-2"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
