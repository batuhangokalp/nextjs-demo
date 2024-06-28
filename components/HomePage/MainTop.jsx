import React from 'react';
import styles from '../../styles/HomeComponent.module.css';
import Image from 'next/image';

const MainTop = () => {
    return (
        <div className={styles.mainTop}>
            <div className={styles.imageContainer}>
                <Image
                    src="/pictures/mainImg.jpg"
                    alt="Ana Sayfa Görseli"
                    layout="fill" // Resmin nasıl yerleştirileceği (fill: container boyutunu dolduracak şekilde)
                    objectFit="cover" // Resmin nasıl uyum sağlayacağı (cover: tamamen kaplayacak şekilde)
                    quality={100} 
                    priority
                />
            </div>
            <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                    <h4 className={styles.title}>ÖDEV-OKUL DESTEĞİ ÇALIŞMASI</h4>
                    <h2 className={styles.description}>Öğrenciler ödevlerini, sınıf ve branş öğretmenleri gözetiminde yapmaktadırlar.</h2>
                </div>
            </div>
        </div>
    );
}

export default MainTop;
