import React from "react";
import ChatBot from '../assets/project_image/Chatbot.png';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../assets/styles/Project.scss';

interface ProjectItem {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: ProjectItem[] = [
  {
    title: "ChatBot AI",
    image: ChatBot,
    description: "Developed a tool-based chatbot application that integrates various specialized tools, enabling it to execute specific tasks dynamically according to user requirements.",
    techStack: ["Langchain", "LangGraph", "Python", "FastAPI", "MongoDB", "React"],
    liveUrl: "https://chatbot-4rkx.onrender.com/",
    githubUrl: "https://github.com/Harshkolambkar",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="project" key={proj.title}>
            <a href={proj.liveUrl} target="_blank" rel="noreferrer">
              <img src={proj.image} className="zoom" alt={proj.title} width="100%" />
            </a>
            <div className="project-body">
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
              <div className="project-chips">
                {proj.techStack.map((tech) => (
                  <Chip key={tech} label={tech} className="chip" size="small" />
                ))}
              </div>
              <div className="project-links">
                <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="proj-link">
                  <GitHubIcon fontSize="small" /> GitHub
                </a>
                <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="proj-link">
                  <OpenInNewIcon fontSize="small" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
