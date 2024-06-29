import Image from 'next/image';
import React from 'react';
import styles from '../../styles/HomeComponent.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import homeData from '../datas/Home.json';

const AboutUs = () => {
    const { aboutUs } = homeData; 
    return (
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsImg}>
                <Image
                    src={aboutUs.image}
                    alt="Logo"
                    layout="fill"
                    className={styles.logoImage}
                />
            </div>
            <div className={styles.aboutUsContent}>
                <h4>{aboutUs.title}</h4>
                <h2>{aboutUs.subtitle}</h2>
                <span>{aboutUs.description}</span>
                <div className={styles.aboutUsSupport}>
                    <button className={styles.aboutUsButton}>
                        <span>{aboutUs.supportButtonText}</span>
                    </button>
                    <div className={styles.supportInfo}>
                        <FaPhoneAlt size={25} color='#008ad2' />
                        <div className={styles.supportNo}>
                            <h4>{aboutUs.supportTitle}</h4>
                            <span>{aboutUs.supportNumber}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
