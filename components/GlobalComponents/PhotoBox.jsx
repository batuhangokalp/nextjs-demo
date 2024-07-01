import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/GlobalComponent.module.css';

const PhotoBox = ({ src }) => {
    return (
        <div className={styles.photoBox}>
            <div className={styles.photoBoxImg}>
                <Image
                    src={src}
                    alt="eğitim, kurs, dershane, etüt, özel ders, öğrenci, öğretmen, lise, ilkokul, ortaokul, sınav"
                    layout="fill"
                    className={styles.photoImg}
                />
            </div>
        </div>
    )
}

export default PhotoBox