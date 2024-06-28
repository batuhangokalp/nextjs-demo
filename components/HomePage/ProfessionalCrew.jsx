import React from 'react'
import styles from '../../styles/HomeComponent.module.css'
import SliderProfileCard from '../GlobalComponents/SliderProfileCard';

const ProfessionalCrew = () => {
    return (
        <div className={styles.professionalCrew}>
            <h4>PROFESYONEL</h4>
            <h2>KADROMUZ</h2>
            <div className={styles.professionalCrewBoxes}>
                <SliderProfileCard />
            </div>
        </div>
    )
}

export default ProfessionalCrew