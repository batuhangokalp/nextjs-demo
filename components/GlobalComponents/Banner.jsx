import Image from 'next/image';
import styles from '../../styles/GlobalComponent.module.css'

const Banner = ({src, heading}) => {
    return (
        <div className={styles.banner}>
            <div className={styles.imageContainer}>
                <Image
                    src={src}
                    alt="Ana Sayfa Görseli"
                    layout="fill" // Resmin nasıl yerleştirileceği (fill: container boyutunu dolduracak şekilde)
                    objectFit="cover" // Resmin nasıl uyum sağlayacağı (cover: tamamen kaplayacak şekilde)
                    quality={100} 
                    priority
                />
            </div>
            <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                    <h2 className={styles.description}>{heading}</h2>
                </div>
            </div>
        </div>
    );
}

export default Banner