import React from 'react'
import styles from '../../styles/HomeComponent.module.css'
import PhotoBox from '../GlobalComponents/PhotoBox';

const Photos = () => {
    return (
        <div className={styles.photos}>
            <h4>FOTOĞRAF GALERİSİ</h4>
            <h2>İŞLETMEMİZDEN KARELER</h2>
            <div className={styles.photosBoxes}>
            <PhotoBox src={"/pictures/matbaa1.jpg"} />
            <PhotoBox src={"/pictures/matbaa2.jpg"} />
            <PhotoBox src={"/pictures/matbaa3.jpg"} />
            <PhotoBox src={"/pictures/matbaa4.jpg"} />
            <PhotoBox src={"/pictures/matbaa5.jpg"} />
            <PhotoBox src={"/pictures/matbaa6.jpg"} />
            <PhotoBox src={"/pictures/matbaa1.jpg"} />
            <PhotoBox src={"/pictures/matbaa2.jpg"} />
            </div>
        </div>
    )
}

export default Photos