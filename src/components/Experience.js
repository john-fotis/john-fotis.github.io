import React from 'react';
import linkIcon from '../_assets/images/link_icon.png';
import ExperienceData from '../_assets/data/experience.json';

function ExperienceSection () {
    return (
        <div className='experience-section'>
            <div className='section-title'>
                <div className='text'>
                    <span>Exp</span>erience
                </div>
                <div className='line' />
            </div>
            <div className='section-content'>
                <ul>
                    {ExperienceData.map((experience, index) => (
                        <li key={index}>
                            <div className='content-name'>
                                <a href={experience.link}>
                                    {experience.title}
                                    <img src={linkIcon} alt='link' />
                                    <span className='period'>{experience.period}</span>
                                </a>
                            </div>
                            <ul>
                                {experience.descriptions.map((description, i) => (
                                    <li key={i}>
                                        <div className='content-description'>{description}</div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ExperienceSection;
