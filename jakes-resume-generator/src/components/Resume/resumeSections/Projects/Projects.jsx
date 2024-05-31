import React from 'react';
import './Projects.css';

const ProjectsItem = ({ title, startDate, endDate, technology, points }) => (
    <>
      <div className='top'>
        <div className='left'>
          <h3 className="projects-item-title">{title}</h3>
          {technology && (
            <>
              <div> | </div>
              <p className="projects-item-technology">{technology}</p>
            </>
          )}
        </div>
        <p className="projects-item-date right">
          {startDate}{startDate && endDate && ' - '}{endDate}
        </p>
      </div>
      {points && points.length > 0 && (
        <ul className='bullets'>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </>
  );

const Projects = ({ projectsList }) => (
    <div className="projects section">
      <h2 className="section-title">Projects</h2>
      {projectsList && projectsList.length > 0 ? (
        projectsList.map((project, index) => (
          <ProjectsItem
            key={index}
            title={project.title || 'Untitled Project'}
            startDate={project.startDate || 'N/A'}
            endDate={project.endDate || 'Present'}
            technology={project.technology || 'Various'}
            points={project.points || []}
          />
        ))
      ) : (
        <p>No projects to display.</p>
      )}
    </div>
  );
export default Projects;
