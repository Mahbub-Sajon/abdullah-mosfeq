import profile from "../assets/profile.png";

const About = () => {
  return (
    <section id="about" className="py-16 bg-blue-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Photo Section */}
          <div className="flex justify-center md:justify-start">
            <img
              src={profile}
              alt="Abdullah Mosfeq"
              className="rounded-xl shadow-lg w-64 h-auto object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="md:col-span-2 space-y-8">
            {/* Bio */}
            <div>
              <p className="text-lg leading-relaxed">
                <span className="font-semibold">
                  Data Analysis Expert & Economic Researcher:
                </span>{" "}
                Skilled quantitative analyst specializing in economic research
                and statistical analysis at the Canada Revenue Agency.
                Extracting insights from complex datasets and transforming data
                into meaningful publications.
              </p>
            </div>

            {/* Grid Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Professional Summary */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Professional Summary
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">💼</span>
                    Quantitative Analyst (ES-02) at Canada Revenue Agency
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">🎓</span>
                    M.A. in Economics, York University
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">🎓</span>
                    M.Sc. in Economics, North South University
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">🎓</span>
                    B.S.S. in Economics, Shahjalal University
                  </li>
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Languages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">🌐</span>
                    English
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">🌐</span>
                    French (intermediate)
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Contact Information
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">📧</span>
                    <a
                      href="mailto:Abdullah.Mosfeq@cra-arc.gc.ca"
                      className="text-blue-600 hover:underline"
                    >
                      Abdullah.Mosfeq@cra-arc.gc.ca
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">💼</span>
                    Quantitative Analyst (ES-02)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">🏢</span>
                    Canada Revenue Agency, Headquarters
                  </li>
                </ul>
              </div>
            </div>

            {/* Download CV */}
            <div className="text-center">
              <a
                href="/path-to-your-cv.pdf"
                download
                className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded hover:bg-blue-950 transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
