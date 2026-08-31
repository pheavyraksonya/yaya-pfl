import NavBar from "./layout/navBar";
import About from "./sections/about";
import Experience from "./sections/experience";
import Footer from "./layout/footer";
import Project from "./sections/project";
import Testimonials from "./sections/testimonials";
import Hero from "./sections/hero";
import Contact from "./sections/contact";

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
      <Footer />
    </div>
  );
};

export default App;
