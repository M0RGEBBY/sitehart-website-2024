import React from 'react';
import './SoftwareTable.css';

const SoftwareTable = () => {
    const software = ["Paint.NET", "O365 Suite", "Angles BI Tool", "Vegas Pro"];
    const skillLevels = ['BEGINNER', 'NOVICE', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'];

    const softwareLevelsMapping = {
        'Paint.NET': 'EXPERT',
        'O365 Suite': 'EXPERT',
        'Angles BI Tool': 'EXPERT',
        'Vegas Pro': 'INTERMEDIATE'

    };

    const gemMapping = {
        BEGINNER: 1,
        NOVICE: 2,
        INTERMEDIATE: 3,
        ADVANCED: 4,
        EXPERT: 5,
    };

    const renderGemForLevel = (skillLevel, currentLevelIndex, skillName) => {
        const skillIndex = gemMapping[softwareLevelsMapping[skillName]];
        const isActive = currentLevelIndex + 1 <= skillIndex;
        return (
            <img
                className={`gem-image ${isActive ? 'active-gem' : 'grayed-gem'}`}
                src={isActive ? "/Images/Flame.png" : "/Images/FlameBW.png"}
            />
        );
    };

    return (
        <div className='language-table-master'>
            <h1 className='resume-header'>SOFTWARE SKILLS</h1>
            <div className="languages-table">
                <div className="skills-table-header">
                    <div className="skillasda-name"></div>
                    {skillLevels.map((level, index) => (
                        <div className="skill-level-label" key={index}>
                            <span className="skill-level-text">{level}</span>
                        </div>
                    ))}
                </div>
                <div className="skills-table-body">
                    {software.map((softSkill, rowIndex) => (
                        <div className="skill-row" key={rowIndex}>
                            <div className="skill-name">{softSkill}</div>
                            {skillLevels.map((level, colIndex) => (
                                <div className='gem-container' key={colIndex}>
                                    {renderGemForLevel(level, colIndex, softSkill)}</div>

                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftwareTable;