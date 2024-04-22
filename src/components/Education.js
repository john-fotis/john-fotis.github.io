import React from 'react';
import linkIcon from '../_assets/images/link_icon.png';
import EducationData from '../_assets/data/education.json';

function Education () {
    return (
        <div className='education-section'>
            <div className='section-title'>
                <div className='text'><span>Edu</span>cation</div>
                <div className='line' />
            </div>
            <div className='section-content'>
                {EducationData.map((education, index) => (
                    <div className='content' key={index}>
                        <div className='content-name'>
                            <a href={education.curriculumUrl}>
                                {education.name}
                                <span className='period'>{education.graduation}</span>
                                <img src={linkIcon} alt='link' />
                            </a>
                        </div>
                        <div className='content-description'>
                            {education.university}<br />
                            {education.thesis?.title && (
                                <>Thesis:&nbsp;<a href={education.thesis.link}>{education.thesis.title}</a></>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
