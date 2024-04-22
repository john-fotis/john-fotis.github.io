import React from 'react';
import InterestsData from '../_assets/data/interests.json';

function InterestsSection () {
    return (
        <div className='interests-section'>
            <div className='section-title'>
                <div className='text'><span>Tec</span>nological interests</div>
                <div className='line' />
            </div>
            <div className='content-description' style={{ marginTop: "10px", marginLeft: "20px", marginBottom: "10px" }}>
                <div>{InterestsData.join(', ')}</div>
            </div>
        </div>
    );
}

export default InterestsSection;
