import React, { useState } from 'react';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import Form from './components/Form/Form';
import './styles/global.css';

const App = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '(123) 456-7890',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Example',
        startDate: '2015-09-01',
        endDate: '2019-05-15',
        location: 'Example City, CA',
        accolades: ['Magna Cum Laude', 'Dean\'s List'],
      },
    ],
    experience: [
      {
        title: 'Software Engineer',
        company: 'Acme Inc.',
        startDate: '2019-06-01',
        endDate: '2022-03-31',
        location: 'Example City, CA',
        points: [
          'Developed and maintained web applications using React and Node.js',
          'Implemented RESTful APIs and integrated with third-party services',
          'Collaborated with cross-functional teams in an Agile environment',
        ],
      },
    ],
    projects: [
      {
        title: 'Personal Portfolio Website',
        startDate: '2018-09-01',
        endDate: '2018-11-30',
        technology: 'React, HTML, CSS',
        points: [
          'Designed and developed a responsive portfolio website',
          'Implemented smooth scrolling and animations',
          'Optimized for performance and accessibility',
        ],
      },
    ],
    skills: {
      languages: ['JavaScript', 'Python', 'Java'],
      frameworks: ['React', 'Node.js', 'Express'],
      tools: ['Git', 'Docker', 'Webpack'],
      libraries: ['React Router', 'Redux', 'Lodash'],
    },
  });

  const handleSubmit = (e, updatedData) => {
    e.preventDefault();
    setResumeData(updatedData);
  };

  return (
    <div className="app">
      <Header />
      <Resume resumeData={resumeData} />
      <Form initialData={resumeData} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
