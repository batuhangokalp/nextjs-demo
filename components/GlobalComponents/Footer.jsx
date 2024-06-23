import Link from 'next/link';
import styles from '../../styles/GlobalComponent.module.css';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.allFooter}>
      <footer className={styles.footer}>
        <nav className={styles.footerPart}>
          <Link href="/">
            <Image src="/pictures/footer_logo.png" alt="Logo" layout="intrinsic" width={200} height={50} className={styles.logoImage} />
          </Link>
          <span>Uzman, tecrübeli, hizmette sınır tanımayan kadromuzla bünyemizdeki her öğrenciyi özgüveni yüksek, araştıran, problem çözebilen, sevmeyi ve sevilmeyi bilen, empati kurabilen, düşünen ve üreten bir birey olarak yetiştirmek kurumumuzun amaçları arasında yer almaktadır.</span>
          <div className={styles.socialBar}>
            <Link href="https://facebook.com" target='_blank' className={styles.fb}>
              <FaFacebook size={25} />
            </Link>
            <Link href="https://x.com" target='_blank' className={styles.tw}>
              <FaXTwitter size={25} />
            </Link>
            <Link href="https://instagram.com" target='_blank' className={styles.ig}>
              <FaInstagram size={25} />
            </Link>
            <Link href="https://linkedin.com" target='_blank' className={styles.in}>
              <FaLinkedin size={25} />
            </Link>
          </div>
        </nav>
        <nav className={styles.footerPart}>
          <h2>HİZMETLERİMİZ</h2>
          <div className={styles.seperator}></div>
          <ul>
            <Link href='/hizmetlerimiz'>Akıl Ve Zeka Oyunları Atölyesi</Link>
            <Link href='/hizmetlerimiz'>Yabancı Dil</Link>
            <Link href='/hizmetlerimiz'>Yaz Okulu</Link>
            <Link href='/hizmetlerimiz'>Robotik Atölyesi</Link>
            <Link href='/hizmetlerimiz'>Kodlama Atölyesi</Link>
          </ul>
        </nav>
        <nav className={styles.footerPart}>
          <h2>İLETİŞİM BİLGİLERİ</h2>
          <div className={styles.seperator}></div>
          <span>Telefon: 0212 111 22 33</span>
          <span>E-Mail: egitim@gmail.com</span>

          <span>Adres:<br /> Vatan Mahallesi, Vatan Sokak No: 11 / 22 <br /> Uzunköprü / Edirne</span>

        </nav>
        <nav className={styles.footerPart}>
          <h2>ÇALIŞMA SAATLERİ</h2>
          <div className={styles.seperator}></div>
          <div className={styles.workTimes}>
            <span>Hafta İçi:</span>
            <span>08.30-18.30</span>
          </div>
          <div className={styles.pointSeperator}></div>
          <div className={styles.workTimes}>
            <span>Cumartesi:</span>
            <span>09.30-18.00</span>
          </div>
          <div className={styles.pointSeperator}></div>

          <div className={styles.workTimes}>
            <span>Pazar:</span>
            <span>Kapalı</span>
          </div>
        </nav>
      </footer>
      <div className={styles.copyRight}>
        <span>Copyright © 2024  |  Tüm Hakları Saklıdır</span>
        <Link href='https://gokalp.netlify.app' target='_blank'><span className={styles.dev}>Batuhan Gökalp</span></Link>
      </div>
    </div>

  );
}

export default Footer