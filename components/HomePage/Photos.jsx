import React from 'react'
import styles from '../../styles/HomeComponent.module.css'
import PhotoBox from '../GlobalComponents/PhotoBox';

const Photos = () => {
    return (
        <div className={styles.photos}>
            <div className={styles.photosBoxes}>
                <div className={styles.photoGalleryDescription}>
                    <h4>KURUMUMUZ</h4>
                    <span>
                        Fotoğraf galerimizde, eğitim programlarımızdan anları ve etkinliklerimizi, yüksek kalitede ve detaylı görsellerle sizlerle paylaşıyoruz.
                    </span>
                </div>
                <PhotoBox src={"/pictures/img1.jpg"} />
                <PhotoBox src={"/pictures/img2.jpg"} />
                <PhotoBox src={"/pictures/img3.jpg"} />
            </div>
        </div>
    )
}

export default Photos