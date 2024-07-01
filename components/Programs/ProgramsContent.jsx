import Image from 'next/image';
import styles from '../../styles/ProgramComponent.module.css';

const ProgramContent = ({ heading, src, span1, span2, span3, span4 }) => {
    return (
        <div className={styles.programContent}>
            <h3>{heading}</h3>
            <div className={styles.seperator} />
            <div className={styles.imageWrapper}>
                <div className={styles.logoContainer}>
                    <Image
                        src={src}
                        alt="eğitim, kurs, dershane, etüt, özel ders, öğrenci, öğretmen, lise, ilkokul, ortaokul, sınav"
                        layout="fill"
                        className={styles.logoImage}
                    />
                </div>
                <div className={styles.textContent}>
                    <span>
                        {span1}
                        {span2}
                    </span>
                </div>
            </div>
            <span>
                {span3}
                {span4}
            </span>
        </div>
    );
};

export default ProgramContent;
