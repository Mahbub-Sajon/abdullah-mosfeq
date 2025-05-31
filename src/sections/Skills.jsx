import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

// Refined professional color palette
const COLORS = [
  "#4A90E2",
  "#50E3C2",
  "#F5A623",
  "#D0021B",
  "#9013FE",
  "#B8E986",
];

// Chart data
const technicalData = [
  { name: "SQL", value: 30 },
  { name: "Python", value: 25 },
  { name: "SAS", value: 20 },
  { name: "R", value: 25 },
  { name: "Data Visualization", value: 85 },
  { name: "Statistical Analysis", value: 90 },
];

const softwareData = [
  { name: "Power BI", value: 25 },
  { name: "SAS Viya", value: 20 },
  { name: "Netezza", value: 15 },
  { name: "MS Suite", value: 40 },
];

const softSkillsData = [
  { skill: "Communication", value: 95 },
  { skill: "Collaboration", value: 90 },
  { skill: "Leadership", value: 75 },
  { skill: "Time Management", value: 80 },
  { skill: "Adaptability", value: 85 },
  { skill: "Problem Solving", value: 90 },
];

const professionalSkillsData = [
  { name: "Data Analysis", value: 85 },
  { name: "Data Extraction", value: 90 },
  { name: "Research", value: 95 },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const tabClass = (value) =>
    `px-4 py-2 font-medium text-sm rounded-xl transition-all duration-300 ease-in-out w-full text-center cursor-pointer ${
      activeTab === value
        ? "bg-white shadow text-blue-800 scale-105"
        : "text-gray-600 hover:bg-gray-200"
    }`;

  const renderPieChart = (data) => (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={70}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={({ name, percent }) =>
            `${name} (${(percent * 100).toFixed(0)}%)`
          }
          animationDuration={1200}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: 8,
            borderColor: "#cbd5e0",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );

  const renderRadarChart = (data) => (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis dataKey="skill" stroke="#4a5568" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#cbd5e0" />
        <Radar
          name="Skills"
          dataKey="value"
          stroke="#2c5282"
          fill="#2b6cb0"
          fillOpacity={0.5}
          animationDuration={1200}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: 8,
            borderColor: "#cbd5e0",
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );

  const renderBarChart = (data) => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#e2e8f0"
        />
        <XAxis dataKey="name" stroke="#4a5568" />
        <YAxis domain={[0, 100]} stroke="#4a5568" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: 8,
            borderColor: "#cbd5e0",
          }}
        />
        <Legend />
        <Bar
          dataKey="value"
          name="Proficiency"
          fill="#2b6cb0"
          radius={[6, 6, 0, 0]}
          animationDuration={1500}
        />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "technical":
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-6 space-y-4 mt-4">
            {renderPieChart(technicalData)}
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
          <div className="grid md:grid-cols-2 gap-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-6 mt-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Professional Skills
              </h3>
              {renderBarChart(professionalSkillsData)}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Professional Expertise
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Project Management</h4>
                  <p>
                    Develop and maintain comprehensive project plans for
                    quantitative research and analysis, including defining
                    scope, team structure, milestones, and methodologies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Client Collaboration</h4>
                  <p>
                    Work collaboratively with internal and external clients to
                    ensure products meet specific needs while adhering to
                    organizational standards and protocols.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Report Writing</h4>
                  <p>
                    Create clear, concise reports and publications that explain
                    complex statistical findings in plain language for diverse
                    audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "software":
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-6 space-y-4 mt-4">
            {renderPieChart(softwareData)}
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

      case "soft":
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-6 space-y-6 mt-4">
            {renderRadarChart(softSkillsData)}
            <div>
              <h3 className="text-xl font-semibold">Communication</h3>
              <p>
                Excellent ability to communicate information and ideas
                effectively through both written and oral communication,
                translating complex statistical findings into accessible
                language.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Team Collaboration</h3>
              <p>
                Proven capability to develop positive working relationships,
                support team decisions, and promote cooperation across
                organizational departments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Problem-Solving</h3>
              <p>
                Strong analytical thinking to identify issues, investigate
                anomalies, and develop effective solutions to complex
                data-related challenges.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-16 bg-gray-100 text-gray-900">
      <div className="px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-xl overflow-hidden">
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
          <button
            onClick={() => setActiveTab("soft")}
            className={tabClass("soft")}
          >
            Soft Skills
          </button>
        </div>
        {renderContent()}
      </div>
    </section>
  );
};

export default Skills;
