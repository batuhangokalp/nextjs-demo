"use client";

import React from 'react'
import styles from '../../styles/HomeComponent.module.css'
import { FaClover, FaPeopleGroup, FaThumbsUp } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import homeData from '../datas/Home.json'; 

const BeHelper = () => {
    const router = useRouter();
    const { beHelper } = homeData; 
    const handleRedirectToContact = () => {
        router.push('/iletisim');
    };

    // Dynamic icon rendering function
    const renderIcon = (icon) => {
        switch(icon) {
            case 'FaClover':
                return <FaClover color='#008ad2' size={25} />;
            case 'FaThumbsUp':
                return <FaThumbsUp color='#008ad2' size={25} />;
            case 'FaPeopleGroup':
                return <FaPeopleGroup color='#008ad2' size={25} />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.beHelper}>
            <div className={styles.beHelperFirstBox}>
                <h4>{beHelper.mainTitle}</h4>
                <span>{beHelper.mainDescription}</span>
                <button className={styles.beHelperButton} onClick={handleRedirectToContact}>
                    <span>{beHelper.buttonText}</span>
                </button>
            </div>
            <div className={styles.beHelperSecondBox}>
                {beHelper.sections.map((section, index) => (
                    <div key={index} className={styles.beHelperSecondBoxLine}>
                        <div className={styles.beHelperSecondBoxLineIcon}>
                            <div className={styles.iconDiv}>
                                {renderIcon(section.icon)}
                            </div>
                        </div>
                        <div className={styles.beHelperSecondBoxLineInfo}>
                            <h4>{section.title}</h4>
                            <span>{section.description}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.beHelperThirdBox}>
                <Link href={beHelper.videoLink}>
                    <div className={styles.playBtn}>
                        <FaPlay color='#008ad2' size={25} />
                    </div>
                </Link>
                <Image
                    src={beHelper.videoImage}
                    alt="matbaa, tempo, baskı, basım, karton, kağıt, reklam, kartvizit, broşür, tanıtım"
                    layout="fill"
                    className={styles.logoImage}
                />
            </div>
        </div>
    )
}

export default BeHelper;
