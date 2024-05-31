import React from 'react';
import './Resume.css';
import Header from './resumeSections/Header/Header';
import Education from './resumeSections/Education/Education';
import Experience from './resumeSections/Experience/Experience';
import Projects from './resumeSections/Projects/Projects';
import Skills from './resumeSections/Skills/Skills';

const Resume = ({ resumeData }) => {
  const {
    personalInfo,
    education,
    experience,
    projects,
    skills,
  } = resumeData;

  return (
    <div className="resume-container">
      <Header
        name={personalInfo.name}
        email={personalInfo.email}
        phone={personalInfo.phone}
        linkedin={personalInfo.linkedin}
        github={personalInfo.github}
      />
      <Education educationList={education} />
      <Experience experienceList={experience} />
      <Projects projectList={projects} />
      <Skills skills={skills} />
    </div>
  );
};

export default Resume;