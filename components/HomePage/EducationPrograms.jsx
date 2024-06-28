import React from 'react'
import styles from '../../styles/HomeComponent.module.css'
import EducationProgramBox from '../GlobalComponents/EducationProgramBox';

const EducationPrograms = () => {
    return (
        <div className={styles.educationPrograms}>
            <h4>EĞİTİM ALANLARIMIZ VE ÇALIŞMALARIMIZ</h4>
            <h2>EĞİTİM PROGRAMLARIMIZ</h2>
            <div className={styles.educationProgramsBoxes}>
                <EducationProgramBox text="İlkokul" src={"/pictures/ilkokul.png"} />
                <EducationProgramBox text="Ortaokul" src={"/pictures/ortaokul.jpg"} />
                <EducationProgramBox text="Lise" src={"/pictures/lise.jpg"} />
            </div>
        </div>
    )
}

export default EducationPrograms