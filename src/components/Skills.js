import React from 'react';
import './Skills.css';
import SkillsData from '../_assets/data/skills.json';

function SkillsSection () {
    return (
        <div className='skills-section'>

            <div className='programming-skills'>
                <h3>Programming Skills</h3>
                <ul>
                    {SkillsData.programmingSkills.map((skill, index) => (
                        <li key={index}>
                            <span className='text'>{skill.progLanguage.join(', ')}</span>
                            <span className='progress'>
                                <div style={{ width: `${ skill.progress }%` }} />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='operating-systems'>
                <h3>Operating Systems</h3>
                <ul>
                    {SkillsData.operatingSystems.map((os, index) => (
                        <li key={index}><img src={require(`../_assets/images/${ os.icon }`)} height={`${ os.iconSize }px`} alt={os.name} /></li>
                    ))}
                </ul>
            </div>

            <div className='tools'>
                <h3>Tools & Technologies</h3>
                <ul>
                    {SkillsData.tools.map((toolGroup, index) => (
                        <li key={index}>
                            <ul>
                                {toolGroup.map((tool, subIndex) => (
                                    <li key={subIndex}><img src={require(`../_assets/images/${ tool.icon }`)} height={`${ tool.iconSize }px`} alt={tool.name} /></li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='soft-skills'>
                <h3>Soft Skills</h3>
                <ul><li>{SkillsData.softSkills.join(' • ')}</li></ul>
            </div>

            <div className='languages'>
                <h3>Languages</h3>
                <ul>
                    <li>
                        <ul className='language-list'>
                            {SkillsData.languages.map((language, index) => (
                                <li key={index}>{language.name}</li>
                            ))}
                        </ul>
                    </li>
                    <li className='vertical-line' />
                    <li>
                        <ul className='language-level'>
                            {SkillsData.languages.map((language, index) => (
                                <li key={index}>{language.level}</li>
                            ))}
                        </ul>
                    </li>
                    <li className='language-level-chart'>
                        <ul>
                            {SkillsData.languages.map((language, index) => (
                                <li key={index} className='chart-row'>
                                    {(() => {
                                        const chartCircles = [];
                                        for (let idx = 0; idx < 5; idx++) {
                                            const level = language.chartLevel;
                                            chartCircles.push(
                                                <span key={idx} className={`chart-circle-${ level > idx ? 'filled' : 'empty' }`} />
                                            );
                                        }
                                        return chartCircles;
                                    })()}
                                </li>

                            ))}
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default SkillsSection;
