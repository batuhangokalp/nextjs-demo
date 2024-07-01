import Image from 'next/image';
import styles from '../../styles/AboutComponent.module.css';
import aboutData from '../datas/About.json';

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
                        alt="eğitim, kurs, dershane, etüt, özel ders, öğrenci, öğretmen, lise, ilkokul, ortaokul, sınav"
                        layout="fill"
                        className={styles.logoImage}
                    />
                </div>
                <div className={styles.textContent}>
                    <span>{whoWeAre.description}</span> <br/> <br/>
                    <span>{whoWeAre.description2}</span>

                </div>
            </div>
            <span>{whoWeAre.description3}</span>
        </div>
    );
};

export default WhoWeAre;
