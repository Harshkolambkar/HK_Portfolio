import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://github.com/Harshkolambkar" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/harsh-kolambkar-7275a924b/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>Designed & built by Harsh Kolambkar</p>
    </footer>
  );
}

export default Footer;
