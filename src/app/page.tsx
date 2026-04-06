import React from 'react';

const Page: React.FC = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Kemesha Thompson</h1>
        <p className="text-sm text-gray-500 mt-1">
          kemeshathompson58@gmail.com | (609) 665-2820 | Tampa, FL
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 uppercase tracking-wide">Summary</h2>
        <p className="text-gray-700">
          Motivated professional with experience in data management, reporting, and customer service. Skilled in investigating information, evaluating outcomes and communicating complex details clearly to diverse populations. Proven ability to manage high-volume workloads, multitask in fast-paced environments, and deliver empathetic, solution-focused service.

.
        </p>
      </section>

      <section className="mb-8 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-2 uppercase tracking-wide">Education</h2>
        <p className="text-gray-700">
          University of South Florida — B.A. in Global Business, Concentration: Business Analytics & Information Systems (Expected 2026)
        </p>
      </section>

      <section className="mb-8 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-2 uppercase tracking-wide">Work Experience</h2>
        <p className="text-gray-700">
          Home Health Aide — Homewell Care Services (2025 - Present)
          <br />
          - Provide compassionate care to patients, assisting with daily activities and ensuring their comfort and safety.
          <br />
          - Communicate effectively with healthcare professionals and family members to coordinate care plans.
          <br />
          - Maintain accurate records of patient care and report any changes in condition to the healthcare team.
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
