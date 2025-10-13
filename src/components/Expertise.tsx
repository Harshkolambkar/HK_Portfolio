import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { v4 as uuidv4 } from 'uuid';

const frontend = [
    "React", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "SASS"
];
const backend = [
    "Python", "Django", "FastAPI", "SQL", "PostgreSQL", "MongoDB"
];
const langchain = [
    "Langchain", "LangGraph", "Python", "FastAPI", "MongoDB", "SQL"
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend Development</h3>
                    <p>I specialize in crafting responsive and engaging user interfaces using modern frameworks. My focus is on delivering seamless, accessible web experiences with clean code and intuitive design. I bring extensive experience with React, Angular, and the full spectrum of web styling technologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {frontend.map((label) => (
                            <Chip key={uuidv4()} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>I build robust server-side applications and APIs with an emphasis on scalability, security, and maintainability. Experienced in Django and FastAPI, I integrate both SQL and NoSQL databases to support diverse business needs. My solutions power efficient data processing and seamless app integration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {backend.map((label) => (
                            <Chip key={uuidv4()} className='chip' label={label} />
                        ))}
                    </div>
                </div>

               <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Langchain & Generative AI Applications</h3>
                    <p>I develop AI-driven applications leveraging Langchain and LangGraph, focusing on conversational agents and retrieval-augmented systems. My work includes integrating LLMs and constructing scalable pipelines tailored to business logic. Passionate about advancing intelligent automation and real-world GenAI solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {langchain.map((label) => (
                            <Chip key={uuidv4()} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>



    );
}

export default Expertise;