import React from 'react';
import './LanguagesTable.css';

const LanguagesTable = () => {
    const softskills = ['C#', 'HTML5 / CSS', 'SQL / Oracle', 'Java', 'Python'];
    const skillLevels = ['BEGINNER', 'NOVICE', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'];

    const skillLevelsMapping = {
        'C#': 'EXPERT',
        'HTML5 / CSS': 'EXPERT',
        'SQL / Oracle': 'ADVANCED',
        'Java': 'INTERMEDIATE',
        'Python': 'INTERMEDIATE'
    };

    const gemMapping = {
        BEGINNER: 1,
        NOVICE: 2,
        INTERMEDIATE: 3,
        ADVANCED: 4,
        EXPERT: 5,
    };

    const renderGemForLevel = (skillLevel, currentLevelIndex, skillName) => {
        const skillIndex = gemMapping[skillLevelsMapping[skillName]];
        const isActive = currentLevelIndex + 1 <= skillIndex;
        return (
            <img
                className={`gem-image ${isActive ? 'active-gem' : 'grayed-gem'}`}
                src={isActive ? "/Images/Gem.png" : "/Images/GemBW.png"}
                alt={`${skillName} - ${skillLevel}`}
            />
        );
    };

    return (
        <div className='language-table-master'>
            <h1 className='resume-header'>PROGRAMMING LANGUAGES</h1>
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
                    {softskills.map((softSkill, rowIndex) => (
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

export default LanguagesTable;