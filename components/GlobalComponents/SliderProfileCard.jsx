"use client";
import { useEffect, useState } from 'react';
import styles from '../../styles/GlobalComponent.module.css';
import ProfileCard from './ProfileCard';

const profiles = [
    { id: 1, name: 'Batuhan Gökalp', title: 'Matematik Öğretmeni', src: '/pictures/defacto.png' },
    { id: 2, name: 'Melis Yılmaz', title: 'Türkçe Öğretmeni', src: '/pictures/lcw.png' },
    { id: 3, name: 'Berk Yakın', title: 'Tarih Öğretmeni', src: '/pictures/koton.png' },
    { id: 4, name: 'Burçin Yalçın', title: 'Coğrafya Öğretmeni', src: '/pictures/jackjones.png' },
    { id: 5, name: 'Gökay Gökalp', title: 'Matematik Öğretmeni', src: '/pictures/suvari.png' }, 
];

const SliderProfileCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [profiles.length]);

    const numColumns = windowWidth >= 768 ? 4 : 2;

    const getVisibleProfiles = () => {
        let visibleProfiles = [];
        for (let i = 0; i < numColumns; i++) {
            const index = (currentIndex + i) % profiles.length;
            visibleProfiles.push(profiles[index]);
        }
        return visibleProfiles;
    };

    return (
        <div className={styles.slider}>
            <div className={styles.slideWrapper}>
                {getVisibleProfiles().map((profile, index) => (
                    <div key={index} className={styles.slide}>
                        <ProfileCard src={profile.src} name={profile.name} title={profile.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SliderProfileCard;
