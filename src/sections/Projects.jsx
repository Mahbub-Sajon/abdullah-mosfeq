import React from "react";

const projects = [
  {
    title: "Eco Initiative",
    description: "A sustainability-driven project for greener cities.",
    image:
      "https://images.unsplash.com/photo-1581091870622-3c8aa5adf42e?auto=format&fit=crop&w=600&q=80",
    link: "https://www.canada.ca/en.html",
  },
  {
    title: "Mobile App Launch",
    description: "Empowering users with modern tools for success.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80",
    link: "https://www.canada.ca/en.html",
  },
  {
    title: "Policy Brief",
    description: "Focused reports to guide data-informed decisions.",
    image:
      "https://images.unsplash.com/photo-1589820296156-d458a96d67ce?auto=format&fit=crop&w=600&q=80",
    link: "https://www.canada.ca/en.html",
  },
  {
    title: "Design Mockups",
    description: "Creative direction for outreach campaigns.",
    image:
      "https://images.unsplash.com/photo-1588776814546-b8553f4a3c8e?auto=format&fit=crop&w=600&q=80",
    link: "https://www.canada.ca/en.html",
  },
  {
    title: "Youth Outreach",
    description: "Engaging future leaders through interactive sessions.",
    image:
      "https://images.unsplash.com/photo-1564865878688-d8c6a85e9929?auto=format&fit=crop&w=600&q=80",
    link: "https://www.canada.ca/en.html",
  },
  {
    title: "Clean Energy Drive",
    description: "Promoting energy-efficient alternatives nationwide.",
    image:
      "https://images.unsplash.com/photo-1582191037150-8a03ff7481af?auto=format&fit=crop&w=600&q=80",
    link: "https://www.canada.ca/en.html",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <p className="mb-12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          voluptates ducimus repellat ratione vitae odio reprehenderit, commodi
          nobis expedita saepe. Natus sint rerum nulla quasi soluta praesentium
          eius qui. Cum sapiente incidunt odio quos harum sed, repellendus
          pariatur rem iure atque cupiditate placeat non, eos necessitatibus ad!
          Amet, tenetur quasi.
        </p>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group break-inside-avoid overflow-hidden rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover rounded-xl"
              />

              {/* Fixed lighter overlay */}
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
