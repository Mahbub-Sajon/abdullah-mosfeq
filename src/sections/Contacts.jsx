// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

const Contacts = () => {
  //   const form = useRef();
  //   const [success, setSuccess] = useState(false);

  //   const sendEmail = (e) => {
  //     e.preventDefault();
  //     emailjs
  //       .sendForm(
  //         "your_service_id",
  //         "your_template_id",
  //         form.current,
  //         "your_public_key"
  //       )
  //       .then(
  //         () => {
  //           setSuccess(true);
  //           form.current.reset();
  //         },
  //         () => {
  //           setSuccess(false);
  //         }
  //       );
  //   };

  return (
    <section className="py-16 bg-blue-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-xl shadow">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <form
            //   ref={form} onSubmit={sendEmail}
            className="space-y-5"
          >
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-1 "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-1 "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-1 "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-1 "
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
            >
              Send Message
            </button>
            {/* {success && (
              <p className="text-green-600 text-sm pt-2">
                ✅ Your message has been sent!
              </p>
            )} */}
          </form>
        </div>

        {/* Contact Info Panel */}
        <div className="bg-gray-100 p-8 rounded-xl shadow space-y-8">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>

          {/* Email */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Email</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">📧</span>
                <a
                  href="mailto:Abdullah.Mosfeq@cra-arc.gc.ca"
                  className="text-blue-600 hover:underline"
                >
                  Abdullah.Mosfeq@cra-arc.gc.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Linguistic Profile */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Linguistic Profile</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">🗣️</span>
                English, French (Intermediate)
              </li>
            </ul>
          </div>

          {/* Current Position */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Current Position</h3>
            <ul className="space-y-2">
              <li className="flex flex-col gap-1">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">💼</span>
                  <span>Quantitative Analyst (ES-02)</span>
                </div>
                <div className="flex items-start gap-3 ml-7">
                  <span className="text-blue-500 mt-1">🏢</span>
                  <span>Canada Revenue Agency, Headquarters</span>
                </div>
              </li>
            </ul>
          </div>

          {/* References */}
          <div>
            <h3 className="text-xl font-semibold mb-3">References</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">📋</span>
                Professional references are available upon request.
              </li>
            </ul>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Awards & Recognition</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">🏆</span>
                Dean of Graduate Studies Scholarship for Domestic Students
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">🏆</span>
                Van Dusen Graduate Scholarships
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">🏆</span>
                York University Graduate Scholarship
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">🏅</span>
                Awarded Vice Chancellor's Medal
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
