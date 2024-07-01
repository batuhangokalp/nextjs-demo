import React from 'react'
import styles from '../../styles/HomeComponent.module.css'
import PhotoBox from '../GlobalComponents/PhotoBox';

const Photos = () => {
    return (
        <div className={styles.photos}>
            <h4>FOTOĞRAF GALERİSİ</h4>
            <h2>KURUMUMUZDAN KARELER</h2>
            <div className={styles.photosBoxes}>
            <PhotoBox src={"/pictures/img1.jpg"} />
            <PhotoBox src={"/pictures/img2.jpg"} />
            <PhotoBox src={"/pictures/img3.jpg"} />
            <PhotoBox src={"/pictures/img4.jpg"} />
            <PhotoBox src={"/pictures/img5.jpg"} />
            <PhotoBox src={"/pictures/img6.png"} />
            <PhotoBox src={"/pictures/img7.jpg"} />
            <PhotoBox src={"/pictures/img8.jpg"} />
            </div>
        </div>
    )
}

export default Photos