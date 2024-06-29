import React from 'react';
import styles from '../../styles/HomeComponent.module.css';
import EducationProgramBox from '../GlobalComponents/EducationProgramBox';
import homeData from '../datas/Home.json';

const EducationPrograms = () => {
    const { educationPrograms } = homeData; 

    return (
        <div className={styles.educationPrograms}>
            <h4>{educationPrograms.mainTitle}</h4>
            <h2>{educationPrograms.subTitle}</h2>
            <div className={styles.educationProgramsBoxes}>
                {educationPrograms.programs.map((program, index) => (
                    <EducationProgramBox
                        key={index}
                        text={program.text}
                        src={program.src}
                        link={program.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default EducationPrograms;
