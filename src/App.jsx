// Section Components
// import Skills from "./sections/Skills";
// import Publications from "./sections/Publications";
// import Projects from "./sections/Projects";
// import Contact from "./sections/Contact";

import Sidebar from "./components/SideBar";
import About from "./sections/About";
import Home from "./sections/Home";

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-0 md:ml-60 pt-14 md:pt-0 overflow-x-hidden scroll-smooth">
        <section id="home" className="min-h-screen">
          <Home />
        </section>

        <section
          id="about"
          className="min-h-screen px-4 py-16 md:py-24 bg-gray-100 dark:bg-gray-900"
        >
          <About />
        </section>

        <section id="skills" className="min-h-screen px-4 py-16 md:py-24">
          {/* <Skills /> */}
        </section>

        <section
          id="publications"
          className="min-h-screen px-4 py-16 md:py-24 bg-gray-100 dark:bg-gray-900"
        >
          {/* <Publications /> */}
        </section>

        <section id="projects" className="min-h-screen px-4 py-16 md:py-24">
          {/* <Projects /> */}
        </section>

        <section
          id="contact"
          className="min-h-screen px-4 py-16 md:py-24 bg-gray-100 dark:bg-gray-900"
        >
          {/* <Contact /> */}
        </section>
      </main>
    </div>
  );
};

export default App;
