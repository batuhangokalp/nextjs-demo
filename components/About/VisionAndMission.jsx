import React from 'react';
import styles from '../../styles/AboutComponent.module.css';
import aboutData from '../datas/About.json';

const VisionAndMission = () => {
    const { visionAndMission } = aboutData;

    return (
        <div className={styles.visionAndMission}>
            <div>
                <h3>{visionAndMission.titleVision}</h3>
                <div className={styles.seperator} />
                <span>{visionAndMission.visionDescription}</span>
            </div>
            <br />
            <div>
                <h3>{visionAndMission.titleMission}</h3>
                <div className={styles.seperator} />
                <span>{visionAndMission.missionDescription}</span>
            </div>
        </div>
    );
};

export default VisionAndMission;
