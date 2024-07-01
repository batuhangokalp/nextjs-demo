import Image from 'next/image';
import styles from '../../styles/GlobalComponent.module.css';

const ProfileCard = ({ src, name, title, slug }) => {
    return (
        <div className={slug !== "referanslarimiz" ?  styles.profileCard : styles.profileCardAbout}>
            <div className={styles.imageContainer}>
                <Image
                    src={src}
                    alt="matbaa, tempo, baskı, basım, karton, kağıt, reklam, kartvizit, broşür, tanıtım"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    className={styles.profileImage}
                />
            </div>
            {/* <div className={styles.detailsContainer}>
                <div className={styles.name}>{name}</div>
                <div className={styles.title}>{title}</div>
            </div> */}
        </div>
    );
}

export default ProfileCard;
