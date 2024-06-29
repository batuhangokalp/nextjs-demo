import React from 'react';
import styles from '../../styles/HomeComponent.module.css';
import { FaHome, FaHeart, FaLeaf, FaAward } from "react-icons/fa";
import homeData from '../datas/Home.json';

const UsInNumbers = () => {
    const { usInNumbers } = homeData; 

    const iconMap = {
        FaHome: FaHome,
        FaHeart: FaHeart,
        FaLeaf: FaLeaf,
        FaAward: FaAward
    };

    return (
        <div className={styles.usInNumbers}>
            <h4>{usInNumbers.mainTitle}</h4>
            <h2>{usInNumbers.subTitle}</h2>
            <div className={styles.usInNumbersBoxes}>
                {usInNumbers.boxes.map((box, index) => {
                    const IconComponent = iconMap[box.icon];
                    return (
                        <div className={styles.usInNumbersBox} key={index}>
                            <IconComponent color='#fff' size={25} />
                            <h2>{box.number}</h2>
                            <span>{box.title}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UsInNumbers;
