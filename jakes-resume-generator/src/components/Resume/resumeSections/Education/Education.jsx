import React from 'react';
import './Education.css';

const EducationItem = ({ degree, school, startDate, endDate, location, accolades }) => (
    <>
        <div className='top'>
            <h3 className="education-item-school">{school}</h3>
            <p className="education-item-title">{degree}</p>
        </div>
        <div className='bottom'>
            <p className="education-item-date">{startDate} - {endDate}</p>
            <p className="education-item-location">{location}</p>
        </div>
        {accolades && accolades.length > 0 && (
            <ul className='accolades'>
                {accolades.map((accolade, index) => (
                    <li key={index}>{accolade}</li>
                ))}
            </ul>
        )}
    </>
);

const Education = ({ educationList }) => (
    <div className="education section">
        <h2 className="section-title">Education</h2>
        {educationList.map((education, index) => (
            <EducationItem
                key={index}
                degree={education.degree}
                school={education.school}
                startDate={education.startDate}
                endDate={education.endDate}
                location={education.location}
                accolades={education.accolades}
            />
        ))}
    </div>
);

export default Education;