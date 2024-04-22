import React from 'react';
import linkIcon from '../_assets/images/link_icon.png';
import ProjectsData from '../_assets/data/projects.json';

function ProjectsSection () {
    return (
        <div className='projects-section'>
            <div className='section-title'>
                <div className='text'><span>Pro</span>jects</div>
                <div className='line' />
            </div>
            <div className='section-content'>
                <ul>
                    {ProjectsData.map((project, index) => (
                        <li key={index}>
                            <div className='content-name'>
                                <a href={project.link}>
                                    <span>{project.title.substring(0, 3)}</span>
                                    {project.title.substring(3)}
                                    <img src={linkIcon} alt='link' />
                                    <span className='period'>{project.year}</span>
                                </a>
                            </div>
                            <div className='content-description'>{project.description}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProjectsSection;
