import Image from 'next/image'
import React from 'react'
import styles from '../../styles/HomeComponent.module.css'
import { FaPhoneAlt } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsImg}>
                <Image
                    src="/pictures/ilkokul.png"
                    alt="Logo"
                    layout="fill"
                    className={styles.logoImage}
                />
            </div>
            <div className={styles.aboutUsContent}>
                <h4>HAKKIMIZDA</h4>
                <h2>Eğitim Anlayışımız</h2>
                <span>Kurumumuzda ilkokul ve ortaokul öğrencilerine yönelik okul derslerine yardımcı çalışmalar yapılmaktadır. Aynı zamanda kurumumuzda ortaokul öğrencilerimiz için LGS hazırlık kursları düzenlenmektedir.
                    Bunun yanında sosyal-sportif faaliyetler, hızlı ve anlayarak okuma çalışmaları, manevi eğitim, akıl ve zekâ oyunları gibi faaliyetler de kurumumuzun hizmetleri içerisinde bulunmaktadır.</span>
                <div className={styles.aboutUsSupport}>
                    <button className={styles.aboutUsButton}><span>Nasıl Yardımcı Olabiliriz?</span></button>
                    <div className={styles.supportInfo}>
                        <FaPhoneAlt size={25} color='#008ad2' />
                        <div className={styles.supportNo}>
                            <h4>Destek Hattı</h4>
                            <span>0212 000 00 00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs