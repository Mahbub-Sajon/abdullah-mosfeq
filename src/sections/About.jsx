const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        {/* Short Bio */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            <span className="font-semibold">
              Data Analysis Expert & Economic Researcher:
            </span>
            Skilled quantitative analyst specializing in economic research and
            statistical analysis at the Canada Revenue Agency. Extracting
            insights from complex datasets and transforming data into meaningful
            publications.
          </p>
        </div>

        {/* Professional Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
            <p>
              <span className="font-medium">Current Position:</span>{" "}
              Quantitative Analyst (ES-02) at Canada Revenue Agency
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>M.A. in Economics, York University</li>
              <li>M.Sc. in Economics, North South University</li>
              <li>B.S.S. in Economics, Shahjalal University</li>
            </ul>
          </div>

          {/* Optional third column */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <p>English, French (intermediate)</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p className="mb-1">
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:Abdullah.Mosfeq@cra-arc.gc.ca"
                className="text-blue-600 hover:underline"
              >
                Abdullah.Mosfeq@cra-arc.gc.ca
              </a>
            </p>
            <p className="mb-1">
              <span className="font-medium">Current Position:</span>{" "}
              Quantitative Analyst (ES-02)
            </p>
            <p>
              <span className="font-medium">Organization:</span> Canada Revenue
              Agency, Headquarters
            </p>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="text-center">
          <a
            href="/path-to-your-cv.pdf"
            download
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
