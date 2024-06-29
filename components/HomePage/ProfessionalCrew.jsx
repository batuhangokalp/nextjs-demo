import React from 'react';
import styles from '../../styles/HomeComponent.module.css';
import SliderProfileCard from '../GlobalComponents/SliderProfileCard';
import homeData from '../datas/Home.json';

const ProfessionalCrew = () => {
    const { professionalCrew } = homeData; 

    return (
        <div className={styles.professionalCrew}>
            <h4>{professionalCrew.mainTitle}</h4>
            <h2>{professionalCrew.subTitle}</h2>
            <div className={styles.professionalCrewBoxes}>
                <SliderProfileCard />
            </div>
        </div>
    );
};

export default ProfessionalCrew;
