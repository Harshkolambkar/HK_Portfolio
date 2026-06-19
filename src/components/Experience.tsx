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
  duration: string;
  bullets: string[];
}

const experienceData: ExpItem[] = [
  {
    id: 1,
    company: "Deloitte",
    logo: logo1,
    position: "Software Engineer 1",
    duration: "2025 – Present",
    bullets: [
      "Promoted to full stack engineering, building end-to-end features across React/TypeScript frontends and Python/FastAPI backends.",
      "Designing and developing AI agents using Langchain and LangGraph to automate complex, multi-step workflows.",
      "Integrating tool-calling, memory, and multi-step reasoning into production-grade agentic systems for enterprise use.",
    ]
  },
  {
    id: 2,
    company: "Deloitte",
    logo: logo1,
    position: "Associate Analyst",
    duration: "2023 – 2025",
    bullets: [
      "Built and maintained responsive UI components using React and TypeScript for enterprise-scale web applications.",
      "Collaborated with cross-functional teams across design, backend, and QA to deliver features on schedule.",
      "Improved application performance and accessibility across key user-facing flows.",
    ]
  },
];

const Experience: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="experience-expand" id="experience">
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
                <p className="exp-position">{exp.position}</p>
                <p className="exp-duration">{exp.duration}</p>
              </div>
            </div>

            <div
              className={`exp-arrow ${openId === exp.id ? 'rotate' : ''}`}
              onClick={() => toggleOpen(exp.id)}
            >
              <FontAwesomeIcon icon={faAngleUp} />
            </div>
          </div>

          {openId === exp.id && (
            <div className="exp-details">
              <ul>
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Experience;
