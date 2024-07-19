"use client";

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import styles from '../../styles/GlobalComponent.module.css';

const PhotoBox = ({ src }) => {
    const router = useRouter();
    const handleRedirectToContact = () => {
        router.push('/multimedya/fotograf');
    };
    return (
        <div className={styles.photoBox}>
            <div className={styles.photoBoxImg}>
                <Image
                    src={src}
                    alt="matbaa, tempo, baskı, basım, karton, kağıt, reklam, kartvizit, broşür, tanıtım"
                    fill
                    className={styles.photoImg}
                />
                <div className={styles.overlayPhoto}>
                    <button className={styles.galleryButton} onClick={handleRedirectToContact}>
                        <span>Galeriyi Ziyaret Et</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PhotoBox