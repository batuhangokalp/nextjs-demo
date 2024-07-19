"use client"
import React, { useState, useEffect } from 'react';
import styles from '../../styles/HomeComponent.module.css';
import Image from 'next/image';
import homeData from '../datas/Home.json';
import { useRouter } from 'next/navigation';

const MainTop = () => {
    const router = useRouter();
    const { mainTop } = homeData;
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Geçiş sırasında görünürlüğü azalt
            setTimeout(() => {
                setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % mainTop.length);
                setFade(true); // Yeni görseli görünür yap
            }, 1000); // 1 saniye sonra geçiş yap
        }, 7000); // 5 saniyede bir geçiş yap

        return () => clearInterval(interval); // Temizlik işlemi
    }, [mainTop.length]);

    const currentBanner = mainTop[currentBannerIndex];

    const handleRedirectToContact = () => {
        router.push('/iletisim');
    };
    const handleRedirectToServices = () => {
        router.push('/hakkimizda/biz-kimiz');
    };
    return (
        <div className={styles.mainTop}>
            <div className={`${styles.imageContainer} ${fade ? styles.fadeIn : styles.fadeOut}`}>
                <Image
                    src={currentBanner.image}
                    alt={currentBanner.title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>
            <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                    <h4 className={styles.title}>{currentBanner.title}</h4>
                    <h2 className={styles.description}>{currentBanner.description}</h2>
                    <div className={styles.overlayButtons}>
                        <button className={styles.mainTopButton} onClick={handleRedirectToServices}>
                            <span>HAKKIMIZDA</span>
                        </button>
                        <button className={styles.mainTopButton2} onClick={handleRedirectToContact}>
                            <span>İLETİŞİME GEÇ</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainTop;
