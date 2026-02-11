import NavBar from "./layout/navBar";
import About from "./sections/about";
import Contact from "./sections/contact";
import Experience from "./sections/experience";

import Project from "./sections/project";
import Testimonials from "./sections/testimonials";
import Hero from "./sections/hero";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Project />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;
