import { useEffect, useRef } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import dp from '../assets/images/dp.png';

function Main() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInViewRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Must start muted — browsers block autoplay with audio
    video.muted = true;
    video.play().catch(() => {});

    // Unmute on first user interaction (click, key, or scroll)
    const unmute = () => {
      video.muted = false;
      document.removeEventListener('click', unmute);
      document.removeEventListener('keydown', unmute);
      document.removeEventListener('scroll', unmute, true);
    };
    document.addEventListener('click', unmute);
    document.addEventListener('keydown', unmute);
    document.addEventListener('scroll', unmute, true);

    // Pause when tab loses focus, resume when tab is active again
    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else if (isInViewRef.current) {
        video.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Pause when scrolled away; restart from beginning when scrolled back
    const section = video.closest('.about-section');
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0 }
    );
    if (section) observer.observe(section);

    return () => {
      document.removeEventListener('click', unmute);
      document.removeEventListener('keydown', unmute);
      document.removeEventListener('scroll', unmute, true);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <div className="about-section">
        <video
          ref={videoRef}
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
