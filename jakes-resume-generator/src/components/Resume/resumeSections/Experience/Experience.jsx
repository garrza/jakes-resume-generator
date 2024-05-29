import React from 'react';
import './Experience.css';

const ExperienceItem = ({ title, startDate, endDate, company, location, points }) => (
    <>
        <div className='top'>
            <h3 className="experience-item-title">{title}</h3>
            <p className="experience-item-date">{startDate} - {endDate}</p>
        </div>
        <div className='bottom'>
            <p className="experience-item-company">{company}</p>
            <p className="experience-item-location">{location}</p>
        </div>
        <ul className='bullets'>
            {points.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
    </>
);

const Experience = ({ experienceList }) => (
    <div className="experience section">
        <h2 className="section-title">Experience</h2>
        {experienceList.map((experience, index) => (
            <ExperienceItem
                key={index}
                title={experience.title}
                company={experience.company}
                startDate={experience.startDate}
                endDate={experience.endDate}
                location={experience.location}
                points={experience.points} 
            />
        ))}
    </div>
);

export default Experience;
