export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p className="text-lg font-semibold">Abdullah Mosfeq</p>
      <p className="mb-4">Quantitative Analyst & Data Specialist</p>
      <p className="text-sm text-gray-500">
        © {year} Abdullah Mosfeq. All rights reserved.
      </p>
    </footer>
  );
}
