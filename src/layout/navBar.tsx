import { MenuIcon, X } from "lucide-react";
import Button from "../components/button";
import { useEffect, useState } from "react";

const NavLink = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#monial", label: "Testimonials" },
  { href: "#experience", label: "Experience" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScroll(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 transition-all duration-500 ${isScroll ? "glass py-3" : "bg-transparent py-5"}  z-50`}
    >
      <nav className=" max-w-8xl mx-auto px-10 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold font-mono tracking-tight hover:text-primary"
        >
          YAYa<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <div className=" rounded-full px-2 py-1 flex items-center gap-1">
            {NavLink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="font-mono px-4 py-2 text-sm text-primary-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* cta button */}

        <div className="hidden md:block ml-4">
          <Button href="#contact" className="font-mono" size="sm">
            Contact ME
          </Button>
        </div>

        {/* mobile menu */}

        <button
          onClick={() => setIsOpen((e) => !e)}
          className="md:hidden p-2 text-foreground cursor-pointer"
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {NavLink.map((link, index) => (
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                key={index}
                className="text-lg font-mono text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => setIsOpen(false)}
              className="font-mono"
              size="sm"
            >
              Contact ME
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
