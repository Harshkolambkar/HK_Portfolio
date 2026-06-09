import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import dp from '../assets/images/dp.png';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <video
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="image-wrapper">
          <img src={dp} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Harshkolambkar" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/harsh-kolambkar-7275a924b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Harsh Kolambkar</h1>
          <p className="tagline">Full Stack Developer & AI Engineer</p>
          <p className="bio">
            Building scalable web applications and LLM-powered agents at Deloitte.
            Experienced in React, Python, and Langchain-based agentic systems.
          </p>
          <div className="hero-actions">
            <a
              href="/resume.pdf"
              download
              className="resume-btn"
            >
              Download Resume
            </a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/Harshkolambkar" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/harsh-kolambkar-7275a924b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
