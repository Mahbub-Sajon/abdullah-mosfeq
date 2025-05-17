import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
import bg from "../assets/bg-dev-image.png"; // Make sure this path is correct

const Home = () => {
  return (
    <div
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Optional: Light Overlay to improve text visibility */}
      <div className="absolute bg-black bg-opacity-30 z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 text-center max-w-2xl px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          <ReactTyped
            strings={["Abdullah Mosfeq"]}
            typeSpeed={80}
            backSpeed={40}
            backDelay={2000}
            loop
            showCursor={true}
          />
        </h1>

        <p className="text-lg sm:text-2xl text-gray-200 mb-8">
          Data Analysis Expert & Economic Researcher
        </p>

        <Link
          to="about"
          smooth={true}
          duration={500}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300 cursor-pointer"
        >
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
