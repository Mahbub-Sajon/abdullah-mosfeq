// Section Components

import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Publications from "./sections/Publications";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div>
      <div className="flex">
        {/* Sidebar Navigation */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 ml-0 md:ml-60 pt-14 md:pt-0 overflow-x-hidden scroll-smooth">
          <section id="home" className="min-h-screen">
            <Home />
          </section>

          <section id="about" className="min-h-screen">
            <About />
          </section>

          <section id="skills" className="min-h-screen">
            <Skills />
          </section>

          <section id="publications" className="min-h-screen">
            <Publications />
          </section>

          <section id="projects" className="min-h-screen">
            <Projects />
          </section>

          <section id="contact" className="min-h-screen">
            <Contacts />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
