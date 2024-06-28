import React from 'react'
import styles from '../../styles/HomeComponent.module.css'
import EducationProgramBox from '../GlobalComponents/EducationProgramBox';

const EducationPrograms = () => {
    return (
        <div className={styles.educationPrograms}>
            <h4>EĞİTİM ALANLARIMIZ VE ÇALIŞMALARIMIZ</h4>
            <h2>EĞİTİM PROGRAMLARIMIZ</h2>
            <div className={styles.educationProgramsBoxes}>
                <EducationProgramBox
                    text="İlkokul"
                    src={"/pictures/ilkokul.png"}
                    link="/programlarimiz/ilkokul"
                />
                <EducationProgramBox
                    text="Ortaokul"
                    src={"/pictures/ortaokul.jpg"}
                    link="/programlarimiz/ortaokul"
                />
                <EducationProgramBox
                    text="Lise"
                    src={"/pictures/lise.jpg"}
                    link="/programlarimiz/lise"
                />
            </div>
        </div>
    )
}

export default EducationPrograms