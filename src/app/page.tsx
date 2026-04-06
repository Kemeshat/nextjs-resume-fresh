import React from 'react';

const Page: React.FC = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Kemesha Thompson</h1>
        <p className="text-sm text-gray-500 mt-1">
          kemesha@example.com | (123) 456-7890 | Tampa, FL
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 uppercase tracking-wide">Summary</h2>
        <p className="text-gray-700">
          Motivated global business student with experience in data analytics, database engineering, and business intelligence.
        </p>
      </section>

      <section className="mb-8 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-2 uppercase tracking-wide">Education</h2>
        <p className="text-gray-700">
          University of South Florida — B.S. in Global Business, Concentration: Business Analytics & Information Systems (Expected 2026)
        </p>
      </section>

      <section className="mb-8 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-2 uppercase tracking-wide">Work Experience</h2>
        <p className="text-gray-700">
          Database Engineer / Analyst — Prepared and managed databases, optimized data pipelines, and supported business intelligence reports.
        </p>
      </section>

      <section className="mb-8 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-2 uppercase tracking-wide">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>SQL / Database Management</li>
          <li>Tableau / Power BI</li>
          <li>Next.js / React / TypeScript</li>
          <li>Tailwind CSS / HTML / CSS</li>
        </ul>
      </section>

      <footer className="mt-8 text-center text-sm text-gray-500">
        © 2026 Kemesha Thompson
      </footer>
    </main>
  );
};

export default Page;