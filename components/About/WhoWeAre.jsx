import Image from 'next/image';
import styles from '../../styles/AboutComponent.module.css';
import aboutData from '../datas/About.json'; // Assuming '../datas/About.json' is the correct path

const WhoWeAre = () => {
    const { whoWeAre } = aboutData;

    return (
        <div className={styles.visionAndMission}>
            <h3>{whoWeAre.title}</h3>
            <div className={styles.seperator} />
            <div className={styles.imageWrapper}>
                <div className={styles.logoContainer}>
                    <Image
                        src={whoWeAre.image}
                        alt={whoWeAre.title}
                        layout="fill"
                        className={styles.logoImage}
                    />
                </div>
                <div className={styles.textContent}>
                    <span>{whoWeAre.description}</span>
                </div>
            </div>
            <span>{whoWeAre.description}</span>
        </div>
    );
};

export default WhoWeAre;
