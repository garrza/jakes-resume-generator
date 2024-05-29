import React, { useState } from 'react';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import Form from './components/Form/Form';
import './styles/global.css';

const App = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    },
    education: [],
    experience: [],
    projects: [],
    skills: {
      languages: [],
      frameworks: [],
      tools: [],
      libraries: [],
    },
  });

  const handleResumeDataChange = (newData) => {
    setResumeData(newData);
  };

  return (
    <div className="app-container">
      <div className="header">
        <Header />
      </div>
      <div className="resume-container">
        <Resume {...resumeData} />
      </div>
      <div className="form-container">
        <Form resumeData={resumeData} onDataChange={handleResumeDataChange} />
      </div>
    </div>
  );
};

export default App;