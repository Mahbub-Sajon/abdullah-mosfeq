import React, { useState } from "react";

const publicationsData = [
  {
    id: 1,
    title: "Annual Statistics Report 2024",
    description: "Detailed insights and key findings from national statistics.",
    category: "Statistics",
    image: "https://via.placeholder.com/300x180",
    link: "https://www.canada.ca/en.html",
  },
  {
    id: 2,
    title: "Economic Performance Review",
    description: "Evaluation of economic growth trends across Canada.",
    category: "Statistics",
    image: "https://via.placeholder.com/300x180",
    link: "https://www.canada.ca/en.html",
  },
  {
    id: 3,
    title: "2024 Health Sector Report",
    description: "Comprehensive review of the Canadian healthcare system.",
    category: "Reports",
    image: "https://via.placeholder.com/300x180",
    link: "https://www.canada.ca/en.html",
  },
  {
    id: 4,
    title: "Environmental Statistics Overview",
    description: "Trends in environmental data and sustainability measures.",
    category: "Statistics",
    image: "https://via.placeholder.com/300x180",
    link: "https://www.canada.ca/en.html",
  },
  {
    id: 5,
    title: "Public Service Delivery Report",
    description: "Efficiency and reach of public sector services in Canada.",
    category: "Reports",
    image: "https://via.placeholder.com/300x180",
    link: "https://www.canada.ca/en.html",
  },
  {
    id: 6,
    title: "Population Trends and Analysis",
    description: "Analysis of demographic changes across regions.",
    category: "Statistics",
    image: "https://via.placeholder.com/300x180",
    link: "https://www.canada.ca/en.html",
  },
];

const tabs = ["All", "Statistics", "Reports"];

const Publications = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = publicationsData.filter((item) => {
    const matchesTab = activeTab === "All" ? true : item.category === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section className="bg-blue-100 py-16 text-gray-900" id="publications">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Publications</h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-blue-800 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by title or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 "
          />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {filteredData.map((pub) => (
            <div
              key={pub.id}
              className="bg-gray-100 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <img
                src={pub.image}
                alt={pub.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{pub.title}</h3>
                <p className="text-sm text-gray-600">{pub.description}</p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-blue-800 hover:underline font-medium"
                >
                  See more →
                </a>
              </div>
            </div>
          ))}
          {filteredData.length === 0 && (
            <p className="text-center col-span-full text-gray-600">
              No publications found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications;
