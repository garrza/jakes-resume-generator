import React, { useState } from 'react';
import './Form.css';

const Form = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (section, field, value, index, subfield) => {
    setFormData(prev => {
      const newData = { ...prev };
      if (index !== undefined) {
        newData[section] = [...prev[section]];
        newData[section][index] = { ...newData[section][index], [field]: value };
        if (subfield) {
          newData[section][index][field] = newData[section][index][field] || [];
          newData[section][index][field][index] = value;
        }
      } else {
        newData[section] = { ...newData[section], [field]: value };
      }
      return newData;
    });
  };

  const addItem = (section) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], {}],
    }));
  };

  const removeItem = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const addPoint = (section, index) => {
    setFormData(prev => {
      const newData = { ...prev };
      newData[section] = [...prev[section]];
      newData[section][index] = { ...newData[section][index] };
      newData[section][index].points = [...(newData[section][index].points || []), ''];
      return newData;
    });
  };

  const PersonalInfoForm = () => (
    <div className="section personal-info">
      <h3>Personal Info</h3>
      {['name', 'email', 'phone', 'linkedin', 'github'].map(field => (
        <div key={field} className="field">
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type={field === 'email' ? 'email' : 'text'}
            value={formData.personalInfo[field] || ''}
            onChange={(e) => handleChange('personalInfo', field, e.target.value)}
          />
        </div>
      ))}
    </div>
  );

  const ListForm = ({ title, section, fields }) => (
    <div className={`section ${section}`}>
      <h3>{title}</h3>
      {formData[section].map((item, index) => (
        <div key={index} className="item">
          {fields.map(field => (
            <div key={field.name} className="field">
              <label>{field.label}</label>
              <input
                type={field.type || 'text'}
                value={item[field.name] || ''}
                onChange={(e) => handleChange(section, field.name, e.target.value, index)}
              />
            </div>
          ))}
          {section !== 'education' && (
            <>
              <h4>Points</h4>
              {(item.points || []).map((point, pIndex) => (
                <input
                  key={pIndex}
                  type="text"
                  value={point}
                  onChange={(e) => handleChange(section, 'points', e.target.value, index, pIndex)}
                />
              ))}
              <button type="button" onClick={() => addPoint(section, index)}>Add Point</button>
            </>
          )}
          <button type="button" onClick={() => removeItem(section, index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => addItem(section)}>Add {title.slice(0, -1)}</button>
    </div>
  );

  const SkillsForm = () => (
    <div className="section skills">
      <h3>Skills</h3>
      {['languages', 'frameworks', 'tools', 'libraries'].map(field => (
        <div key={field} className="field">
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type="text"
            value={(formData.skills[field] || []).join(', ')}
            onChange={(e) => handleChange('skills', field, e.target.value.split(', '))}
            placeholder="Comma-separated list"
          />
        </div>
      ))}
    </div>
  );

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(e, formData); }}>
      <PersonalInfoForm />
      <ListForm
        title="Education"
        section="education"
        fields={[
          { name: 'degree', label: 'Degree' },
          { name: 'school', label: 'School' },
          { name: 'startDate', label: 'Start Date', type: 'date' },
          { name: 'endDate', label: 'End Date', type: 'date' },
          { name: 'location', label: 'Location' },
          { name: 'accolades', label: 'Accolades' },
        ]}
      />
      <ListForm
        title="Experience"
        section="experience"
        fields={[
          { name: 'title', label: 'Title' },
          { name: 'company', label: 'Company' },
          { name: 'startDate', label: 'Start Date', type: 'date' },
          { name: 'endDate', label: 'End Date', type: 'date' },
          { name: 'location', label: 'Location' },
        ]}
      />
      <ListForm
        title="Projects"
        section="projects"
        fields={[
          { name: 'title', label: 'Title' },
          { name: 'startDate', label: 'Start Date', type: 'date' },
          { name: 'endDate', label: 'End Date', type: 'date' },
          { name: 'technology', label: 'Technology' },
        ]}
      />
      <SkillsForm />
      <button type="submit">Update Resume</button>
    </form>
  );
};

export default Form;