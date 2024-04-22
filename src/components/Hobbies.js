import React from 'react';
import './Hobbies.css';
import HobbiesData from '../_assets/data/hobbies.json';

function HobbiesSection () {
    const hobbyIcons = HobbiesData.map(hobby => require(`../_assets/images/${ hobby.icon }`));

    return (
        <div className='hobbies-section'>
            <div className='section-title'>
                <div className='text'><span>Hob</span>bies</div>
                <div className='line' />
            </div>
            <div className='hobbies'>
                <ul>
                    <li>
                        <ul className='hobbies-icons'>
                            {HobbiesData.map((hobby, index) => (
                                <li key={index}>
                                    <img src={hobbyIcons[index]} alt={`${ hobby.name }`} />
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <ul className='hobbies-description'>
                            {HobbiesData.map((hobby, index) => (
                                <li key={index}>{hobby.name}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HobbiesSection;
