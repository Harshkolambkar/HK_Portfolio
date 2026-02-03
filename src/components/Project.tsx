import React from "react";
import ChatBot from '../assets/project_image/Chatbot.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://chatbot-4rkx.onrender.com/" target="_blank" rel="noreferrer"><img src={ChatBot} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://chatbot-4rkx.onrender.com/" target="_blank" rel="noreferrer"><h2>ChatBot AI</h2></a>
                <p>Developed a chatbot application that integrates various specialized tools, enabling it to execute specific tasks dynamically according to user requirements.</p>
            </div>
            {/*<div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div> */}
            
        </div>
    </div>
    );
}

export default Project;