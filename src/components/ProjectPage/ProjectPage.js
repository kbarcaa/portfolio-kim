import React from 'react';
//css
import './public/ProjectPage.css';
//data
import json from './public/projects.json';
//components
import Project from './components/Project';
import ProjectIcons from './components/ProjectIcons';
//images
import project__1 from './public/img/project__1.png';
import project__1b from './public/img/project__1b.png';
import project__2 from './public/img/project__2.png';
import project__2b from './public/img/project__2b.png';
import project__3 from './public/img/project__3.png';
import project__3b from './public/img/project__3b.png';
import project__4 from './public/img/project__4.png';
import project__4b from './public/img/project__4b.png';
import project__5 from './public/img/project__5.png';
import project__5b from './public/img/project__5b.png';
import project__5c from './public/img/project__5c.png';
import project__6 from './public/img/project__6.png';
import project__6b from './public/img/project__6b.png';
import project__6c from './public/img/project__6c.png';

export default function ProjectPage() {
  return (
    <div className="projectPage">
      <div className="projectPage__heading">
        <h2>PROJECTS</h2>
        <hr />
      </div>
      <div className="projectPage__icons">
        <ProjectIcons />
      </div>
      <hr />
      <div className="projectPage__projects">
        <div className="row">
          {/* To-Do List */}
          <Project
            title={json.project__1.title}
            url={json.project__1.url}
            github={json.project__1.github}
            description={json.project__1.description}
            date={json.project__1.date}
            utilized={json.project__1.utilized}
            image={project__1}
            image2={project__1b}
          />
          {/* Weather Checker */}
          <Project
            title={json.project__2.title}
            url={json.project__2.url}
            github={json.project__2.github}
            description={json.project__2.description}
            date={json.project__2.date}
            utilized={json.project__2.utilized}
            image={project__2}
            image2={project__2b}
          />
          {/* Snippet-Saver */}
          <Project
            title={json.project__3.title}
            url={json.project__3.url}
            github={json.project__3.github}
            description={json.project__3.description}
            date={json.project__3.date}
            utilized={json.project__3.utilized}
            image={project__3}
            image2={project__3b}
          />
        </div>
        <div className="row ">
          {/* Covid Checker */}
          <Project
            title={json.project__4.title}
            url={json.project__4.url}
            github={json.project__4.github}
            description={json.project__4.description}
            date={json.project__4.date}
            utilized={json.project__4.utilized}
            image={project__4}
            image2={project__4b}
          />
          {/* Spotify-Clone */}
          <Project
            title={json.project__5.title}
            url={json.project__5.url}
            github={json.project__5.github}
            description={json.project__5.description}
            date={json.project__5.date}
            utilized={json.project__5.utilized}
            image={project__5}
            image2={project__5b}
            image3={project__5c}
          />
          {/* Netflix-Clone */}
          <Project
            title={json.project__6.title}
            url={json.project__6.url}
            github={json.project__6.github}
            description={json.project__6.description}
            date={json.project__6.date}
            utilized={json.project__6.utilized}
            image={project__6}
            image2={project__6b}
            image3={project__6c}
          />
        </div>
      </div>
    </div>
  );
}
