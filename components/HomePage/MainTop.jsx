import React from 'react';
import styles from '../../styles/HomeComponent.module.css';
import Image from 'next/image';
import homeData from '../datas/Home.json'; 

const MainTop = () => {
    const { mainTop } = homeData; 
    return (
        <div className={styles.mainTop}>
            <div className={styles.imageContainer}>
                <Image
                    src={mainTop.image}
                    alt="matbaa, tempo, baskı, basım, karton, kağıt, reklam, kartvizit, broşür, tanıtım"
                    layout="fill" // Resmin nasıl yerleştirileceği (fill: container boyutunu dolduracak şekilde)
                    objectFit="cover" // Resmin nasıl uyum sağlayacağı (cover: tamamen kaplayacak şekilde)
                    quality={100} 
                    priority
                />
            </div>
            <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                    <h4 className={styles.title}>{mainTop.title}</h4>
                    <h2 className={styles.description}>{mainTop.description}</h2>
                </div>
            </div>
        </div>
    );
}

export default MainTop;
