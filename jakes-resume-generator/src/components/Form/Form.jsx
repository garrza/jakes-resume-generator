import React from 'react';
import './Form.css';

const Form = ({ initialData, onUpdate }) => {
  const updateData = (section, field, value, index, subfield) => {
    const newData = { ...initialData };
    if (index !== undefined) {
      newData[section] = [...initialData[section]];
      newData[section][index] = { ...newData[section][index], [field]: value };
      if (subfield !== undefined) {
        newData[section][index][field] = newData[section][index][field] || [];
        newData[section][index][field][subfield] = value;
      }
    } else if (section === 'skills') {
      newData.skills = { ...newData.skills, [field]: value.split(', ').filter(Boolean) };
    } else if (section === 'personalInfo') {
      newData.personalInfo = { ...newData.personalInfo, [field]: value };
    }
    onUpdate(newData);
  };

  const ListForm = ({ title, section, fields, hasPoints }) => (
    <div className={`section ${section}`}>
      <h3>{title}</h3>
      {initialData[section].map((item, index) => (
        <div key={index} className="item">
          {fields.map(field => (
            <div key={field.name} className="field">
              <label>{field.label}</label>
              <input
                type={field.type || 'text'}
                value={item[field.name] || ''}
                onChange={(e) => updateData(section, field.name, e.target.value, index)}
              />
            </div>
          ))}
          {hasPoints && (
            <>
              <h4>Points</h4>
              {(item.points || []).map((point, pIndex) => (
                <input
                  key={pIndex}
                  type="text"
                  value={point}
                  onChange={(e) => updateData(section, 'points', e.target.value, index, pIndex)}
                />
              ))}
              <button type="button" onClick={() => updateData(section, 'points', '', index, (item.points || []).length)}>
                Add Point
              </button>
            </>
          )}
          <button type="button" onClick={() => {
            const newList = initialData[section].filter((_, i) => i !== index);
            onUpdate({ ...initialData, [section]: newList });
          }}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => {
        const newList = [...initialData[section], {}];
        onUpdate({ ...initialData, [section]: newList });
      }}>
        Add {title.slice(0, -1)}
      </button>
    </div>
  );

  return (
    <form>
      <div className="section personal-info">
        <h3>Personal Info</h3>
        {['name', 'email', 'phone', 'linkedin', 'github'].map(field => (
          <div key={field} className="field">
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              value={initialData.personalInfo[field] || ''}
              onChange={(e) => updateData('personalInfo', field, e.target.value)}
            />
          </div>
        ))}
      </div>

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
        hasPoints
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
        hasPoints
      />

      <div className="section skills">
        <h3>Skills</h3>
        {['languages', 'frameworks', 'tools', 'libraries'].map(field => (
          <div key={field} className="field">
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              value={(initialData.skills[field] || []).join(', ')}
              onChange={(e) => updateData('skills', field, e.target.value)}
              placeholder="Comma-separated list"
            />
          </div>
        ))}
      </div>
    </form>
  );
};

export default Form;