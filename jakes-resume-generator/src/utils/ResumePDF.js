import React from "react";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import Header from "../components/Resume/resumeSections/Header/Header";
import Education from "../components/Resume/resumeSections/Education/Education";
import Experience from "../components/Resume/resumeSections/Experience/Experience";
import Projects from "../components/Resume/resumeSections/Projects/Projects";
import Skills from "../components/Resume/resumeSections/Skills/Skills";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
});

const ResumePDF = ({ resumeData }) => {
  const { personalInfo, education, experience, projects, skills } = resumeData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
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
        <Skills
          languages={skills.languages}
          frameworks={skills.frameworks}
          tools={skills.tools}
          libraries={skills.libraries}
        />
      </Page>
    </Document>
  );
};

export default ResumePDF;
