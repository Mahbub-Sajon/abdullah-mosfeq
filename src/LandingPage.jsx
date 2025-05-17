import { ReactTyped } from "react-typed";

const LandingPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        {/* Placeholder for Profile Image */}
        <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gray-700">
          {/* Insert Profile Image Here */}
        </div>

        {/* Typing Animation for Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <ReactTyped
            strings={["Mosfequr Rahman"]}
            typeSpeed={70}
            backSpeed={40}
            loop={false}
            showCursor={true}
          />
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl mb-6">
          Data Scientist & Machine Learning Engineer
        </p>

        {/* Tagline */}
        <div className="text-lg md:text-xl text-gray-400 mb-6">
          <span>Transforming data into actionable insights.</span>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
