import About from "./sections/About";
import Clients from "./sections/Clients";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <ContactMe />
      {/* <Footer /> */}
    </main>
  );
};

export default App;
