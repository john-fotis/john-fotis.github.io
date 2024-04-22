import React from 'react';
import './PersonalInfo.css';
import PersonalInfoData from '../_assets/data/personalInfo.json';

function PersonalInfoSection () {
    const { name, profilePhoto, contactInfo } = PersonalInfoData;
    const profilePhotoSrc = require(`../_assets/images/${ profilePhoto }`);
    const contactIcons = contactInfo.map(contact => require(`../_assets/images/${ contact.icon }`));

    return (
        <div className='personal-info'>
            <div className='name'>
                <h3>
                    <span id='first-name'>{name.firstName}</span>
                    <br />
                    <span>{name.lastName}</span>
                </h3>
            </div>
            <div className='profile-photo'>
                <img src={profilePhotoSrc} alt='Profile' />
            </div>
            <div className='contact-info'>
                <h3>Find me at:</h3>
                <ul>
                    {contactInfo.map((contact, index) => (
                        <li key={index}>
                            <span className='icon'>
                                <img src={contactIcons[index]} height={`${ contact.iconSize }px`} alt={contact.text} />
                            </span>
                            <span className='text'>
                                <a href={contact.link}>{contact.text}</a>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PersonalInfoSection;
