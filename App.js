import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaDatabase, FaChartBar, FaPython, FaLaptopCode } from 'react-icons/fa';

const projects = [
  {
    title: 'International Debt Analysis (SQL)',
    description: 'Analyzed global debt data using SQL queries to uncover key insights like top indebted countries, average debt, and more.',
    link: 'https://www.kaggle.com/datasets/siddjoshisidd/international-debt'
  },
  {
    title: 'Web Data Scraping',
    description: 'Scraped Wikipedia data to extract a list of millionaires by country using BeautifulSoup and pandas.',
    link: 'https://en.wikipedia.org/wiki/List_of_countries_by_number_of_millionaires'
  },
  {
    title: 'Adidas Sales Data Analysis',
    description: 'Performed data cleaning, analysis, and visualization of Adidas sales data across US regions to determine top sales months and cities.'
  },
  {
    title: 'Linear Regression Model',
    description: 'Built a Linear Regression model to predict sales trends for a decade, evaluating performance using MSE and R2 scores.'
  },
  {
    title: 'Polynomial Regression Model',
    description: 'Designed a Polynomial Regression model to predict sales with more complex data patterns, visualizing future sales projections.'
  }
];

const ProjectCard = ({ title, description, link }) => (
  <div className="p-4 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform">
    <h2 className="text-xl font-bold text-blue-600 flex items-center"><FaLaptopCode className="mr-2" /> {title}</h2>
    <p className="mt-2 text-gray-700">{description}</p>
    {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">View Project</a>}
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <header className="text-center py-10 bg-blue-600 text-white rounded-b-2xl">
        <h1 className="text-3xl font-bold">Siddharth Joshi's Data Projects</h1>
        <p className="text-lg mt-2">Explore my portfolio of SQL, Web Scraping, Data Analysis, and Machine Learning projects</p>
      </header>

      <section className="text-center my-6">
        <h2 className="text-2xl font-bold text-blue-600">Bio</h2>
        <p className="text-gray-700 mt-2">Hi, I'm Siddharth Joshi — a passionate data analyst who loves turning raw data into valuable insights!</p>
      </section>

      <section className="text-center my-6">
        <h2 className="text-2xl font-bold text-blue-600">Contact</h2>
        <p className="text-gray-700 flex justify-center items-center"><FaEnvelope className="mr-2" /> siddhjoshi019@gmail.com</p>
        <p className="text-gray-700 flex justify-center items-center mt-1"><FaMapMarkerAlt className="mr-2" /> Windsor, Ontario, Canada</p>
      </section>

      <section className="text-center my-6">
        <h2 className="text-2xl font-bold text-blue-600">Skills</h2>
        <p className="text-gray-700 flex justify-center items-center mt-2"><FaDatabase className="mr-2" /> Data Analysis, MySQL</p>
        <p className="text-gray-700 flex justify-center items-center mt-1"><FaChartBar className="mr-2" /> Power BI</p>
        <p className="text-gray-700 flex justify-center items-center mt-1"><FaPython className="mr-2" /> Python</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <footer className="text-center text-gray-700 py-4">
        © 2025 Siddharth Joshi | Data Enthusiast
      </footer>
    </div>
  );
}
