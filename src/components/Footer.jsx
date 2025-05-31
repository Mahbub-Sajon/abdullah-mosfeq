export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center md:ml-60">
      <p className="text-lg font-semibold">Abdullah Mosfeq</p>
      <p className="mb-4">Quantitative Analyst & Data Specialist</p>
      <hr className="w-1/2 mx-auto my-3" />
      <p className="text-sm text-gray-500">
        © {year} Abdullah Mosfeq. All rights reserved.
      </p>
    </footer>
  );
}
