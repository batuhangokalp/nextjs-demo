import React from 'react'
import styles from '../../styles/HomeComponent.module.css'
import { FaHome, FaHeart, FaLeaf, FaAward } from "react-icons/fa";

const UsInNumbers = () => {
    return (
        <div className={styles.usInNumbers}>
            <h4>NEDEN BİZİ TERCİH ETMELİSİNİZ?</h4>
            <h2>Rakamlarla Biz</h2>
            <div className={styles.usInNumbersBoxes}>
                <div className={styles.usInNumbersBox}>
                    <FaHome color='#fff' size={25}/>
                    <h2>10</h2>
                    <span>Yıllık Tecrübe</span>
                </div>
                <div className={styles.usInNumbersBox}>
                    <FaHeart color='#fff' size={25}/>
                    <h2>2500</h2>
                    <span>Mutlu Öğrencilerimiz</span>
                </div>
                <div className={styles.usInNumbersBox}>
                    <FaLeaf color='#fff' size={25}/>
                    <h2>20</h2>
                    <span>Uzman Personel</span>
                </div>
                <div className={styles.usInNumbersBox}>
                    <FaAward color='#fff' size={25}/>
                    <h2>10</h2>
                    <span>Başarı Ödülü</span>
                </div>

            </div>

        </div>
    )
}

export default UsInNumbers