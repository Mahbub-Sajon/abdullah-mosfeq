import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const technicalData = [
  { name: "SQL", value: 30 },
  { name: "Python", value: 25 },
  { name: "SAS", value: 20 },
  { name: "R", value: 25 },
];

const softwareData = [
  { name: "Power BI", value: 25 },
  { name: "SAS Viya", value: 20 },
  { name: "Netezza", value: 15 },
  { name: "MS Suite", value: 40 },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const tabClass = (value) =>
    `px-4 py-2 font-medium text-sm rounded-xl transition-colors duration-200 w-full text-center ${
      activeTab === value
        ? "bg-white shadow text-blue-600"
        : "text-gray-600 hover:bg-gray-200"
    }`;

  const renderChart = (data) => (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name }) => name}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "technical":
        return (
          <div className="bg-white shadow rounded-xl p-6 space-y-4 mt-4">
            {renderChart(technicalData)}
            <div>
              <h3 className="text-xl font-semibold">
                Data Extraction & Transformation
              </h3>
              <p>
                Experienced in extracting, transforming, and preparing
                quantitative data from complex sources using{" "}
                <strong>SQL, SAS, R,</strong> and <strong>Python</strong> to
                generate actionable insights.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Statistical Analysis</h3>
              <p>
                Skilled in statistical methods for analyzing large datasets,
                identifying trends, and investigating anomalies to inform
                decision-making processes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Research Methodology</h3>
              <p>
                Proficient in developing research methodologies, defining
                project scope, and implementing analytical frameworks for
                quantitative analysis projects.
              </p>
            </div>
          </div>
        );

      case "professional":
        return (
          <div className="bg-white shadow rounded-xl p-6 space-y-4 mt-4">
            <div>
              <h3 className="text-xl font-semibold">Project Management</h3>
              <p>
                Develop and maintain comprehensive project plans for
                quantitative research and analysis, including defining scope,
                team structure, milestones, and methodologies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Client Collaboration</h3>
              <p>
                Work collaboratively with internal and external clients to
                ensure products meet specific needs while adhering to
                organizational standards and protocols.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Report Writing</h3>
              <p>
                Create clear, concise reports and publications that explain
                complex statistical findings in plain language for diverse
                audiences.
              </p>
            </div>
          </div>
        );

      case "software":
        return (
          <div className="bg-white shadow rounded-xl p-6 space-y-4 mt-4">
            {renderChart(softwareData)}
            <div>
              <h3 className="text-xl font-semibold">Data Processing Tools</h3>
              <p>
                Proficient in using specialized tools like{" "}
                <strong>Netezza Performance Server</strong> and{" "}
                <strong>SAS Viya</strong> to process and analyze large datasets
                efficiently.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Data Visualization</h3>
              <p>
                Skilled in creating impactful data visualizations using{" "}
                <strong>Power BI</strong> and other tools to communicate complex
                findings in an accessible way.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Productivity Suite</h3>
              <p>
                Experienced in using{" "}
                <strong>
                  SharePoint, Outlook, OneDrive, Word, Excel, PowerPoint,
                  OneNote, Teams,
                </strong>{" "}
                and <strong>Whiteboard</strong> for effective collaboration and
                documentation.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
      <div className="grid grid-cols-3 gap-2 bg-gray-100 rounded-xl overflow-hidden">
        <button
          onClick={() => setActiveTab("technical")}
          className={tabClass("technical")}
        >
          Technical Skills
        </button>
        <button
          onClick={() => setActiveTab("professional")}
          className={tabClass("professional")}
        >
          Professional Skills
        </button>
        <button
          onClick={() => setActiveTab("software")}
          className={tabClass("software")}
        >
          Software Skills
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default Skills;
