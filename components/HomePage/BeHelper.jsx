import React from 'react'
import styles from '../../styles/HomeComponent.module.css'
import { FaClover, FaPeopleGroup, FaThumbsUp } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const BeHelper = () => {
    return (
        <div className={styles.beHelper}>
            <div className={styles.beHelperFirstBox}>
                <h4>NASIL YARDIMCI OLABİLİRİZ?</h4>
                <span>Uzman, tecrübeli, hizmette sınır tanımayan kadromuzla bünyemizdeki her öğrenciyi özgüveni yüksek, araştıran, problem çözebilen, sevmeyi ve sevilmeyi bilen, empati kurabilen, düşünen ve üreten bir birey olarak yetiştirmek kurumumuzun amaçları arasında yer almaktadır.</span>
                <button className={styles.beHelperButton}><span>İLETİŞİM BİLGİLERİ</span></button>
            </div>
            <div className={styles.beHelperSecondBox}>
                <div className={styles.beHelperSecondBoxLine}>
                    <div className={styles.beHelperSecondBoxLineIcon}>
                        <div className={styles.iconDiv}>
                            <FaClover color='#008ad2' size={25} />
                        </div>
                    </div>
                    <div className={styles.beHelperSecondBoxLineInfo}>
                        <h4>SEVGİYLE EĞİTİM</h4>
                        <span>Günlük hayatta kullanmış olduğumuz somut ve soyut birçok kavramı farkederek öğreniyorlar.</span>
                    </div>
                </div>
                <div className={styles.beHelperSecondBoxLine}>
                    <div className={styles.beHelperSecondBoxLineIcon}>
                        <div className={styles.iconDiv}>
                            <FaThumbsUp color='#008ad2' size={25} />
                        </div>
                    </div>
                    <div className={styles.beHelperSecondBoxLineInfo}>
                        <h4>BAŞARILI EĞİTİM</h4>
                        <span>Çocukta zeka gelişiminin %70 lik kısmı 7 yaşına kadar tamamlanır ve öğrenme becerisi bu yaşta gelişir.</span>
                    </div>
                </div>
                <div className={styles.beHelperSecondBoxLine}>
                    <div className={styles.beHelperSecondBoxLineIcon}>
                        <div className={styles.iconDiv}>
                            <FaPeopleGroup color='#008ad2' size={25} />
                        </div>
                    </div>
                    <div className={styles.beHelperSecondBoxLineInfo}>
                        <h4>TECRÜBELİ KADRO</h4>
                        <span>Personelin tecrübe, güler yüz ve yüksek motivasyonunun getirdiği olumlu özellikleri çocuklara yansıttığı bir ortam.</span>
                    </div>
                </div>
            </div>
            <div className={styles.beHelperThirdBox}>
                <Link href="/videolar">
                    <div className={styles.playBtn}>
                        <FaPlay color='#008ad2' size={25} />
                    </div>
                </Link>
                <Image
                    src="/pictures/homework.jpg"
                    alt="Logo"
                    layout="fill"
                    className={styles.logoImage}
                />
            </div>
        </div>
    )
}

export default BeHelper