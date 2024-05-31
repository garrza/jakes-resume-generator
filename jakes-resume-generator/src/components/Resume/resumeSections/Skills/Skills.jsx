import React from 'react';
import './Skills.css';

const SkillsItem = ({ title, skills }) => (
    <>
      <h3 className="skills-item-title">{title}</h3>
      {skills && skills.length > 0 ? (
        <ul className='skills'>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No {title.toLowerCase()} skills listed.</p>
      )}
    </>
  );
  

const Skills = ({ skills }) => (
    <div className="skills section">
      <h2 className="section-title">Skills</h2>
      {skills && Object.keys(skills).length > 0 ? (
        Object.entries(skills).map(([category, categorySkills], index) => (
          categorySkills && categorySkills.length > 0 ? (
            <SkillsItem
              key={index}
              title={formatCategoryTitle(category)}
              skills={categorySkills}
            />
          ) : null
        )).filter(Boolean)
      ) : (
        <p>No skills to display.</p>
      )}
    </div>
);

const formatCategoryTitle = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
};
export default Skills;