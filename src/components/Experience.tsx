import React, { useState } from "react";
import '../assets/styles/Experience.scss';
import logo1 from '../assets/images/logo1.jpg';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ExpItem {
  id: number;
  company: string;
  logo: string;
  position: string;
  description: string;
}

const experienceData: ExpItem[] = [
  {
    id: 1,
    company: "Deloitte",
    logo: logo1,
    position: "Associate Analyst",
    description: "Designed and implemented frontend features using React and TypeScript, collaborated with cross-functional teams, and improved app performance by 30%.Designed and implemented frontend features using React and TypeScript, collaborated with cross-functional teams, and improved app performance by 30%.Designed and implemented frontend features using React and TypeScript, collaborated with cross-functional teams, and improved app performance by 30%.Designed and implemented frontend features using React and TypeScript, collaborated with cross-functional teams, and improved app performance by 30%.Designed and implemented frontend features using React and TypeScript, collaborated with cross-functional teams, and improved app performance by 30%.Designed and implemented frontend features using React and TypeScript, collaborated with cross-functional teams, and improved app performance by 30%.Designed and implemented frontend features using React and TypeScript, collaborated with cross-functional teams, and improved app performance by 30%."
  },
  // {
  //   id: 2,
  //   company: "Tech Solutions",
  //   logo: "/images/techsolutions-logo.png",
  //   position: "Frontend Developer",
  //   description: "Worked on responsive web applications, integrated APIs, and enhanced UI/UX with animations and smooth interactions."
  // },
  // Add more experiences here
];

const Experience: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

 return (
  <section className="experience-expand"  id="experience">
    <br />
        <br />
            <br />
                <br />
                
    <h2 className="title">Experience</h2>
    {experienceData.map((exp) => (
      <div
        key={exp.id}
        className={`exp-card ${openId === exp.id ? 'open' : ''}`}
      >
        <div className="exp-header">
          <div className="exp-info">
            <img src={exp.logo} alt={exp.company} className="exp-logo" />
            <div className="exp-text">
              <h3>{exp.company}</h3>
              <p>{exp.position}</p>
            </div>
          </div>

          {/* ⬇️ Only arrow triggers toggle */}
          <div
            className={`exp-arrow ${openId === exp.id ? 'rotate' : ''}`}
            onClick={() => toggleOpen(exp.id)}
          >
            <FontAwesomeIcon icon={faAngleUp} style={{ color: "#ffffff" }} />
          </div>
        </div>

        {/* ⬇️ Description shows only when open */}
        {openId === exp.id && (
          <div className="exp-details">
            {exp.description}
          </div>
        )}
      </div>
    ))}


      <br />
        <br />
            <br />
                <br />
                <br />    <br />
                    <br />
    
  </section>
);

};

export default Experience;
