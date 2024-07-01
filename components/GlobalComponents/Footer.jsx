import Link from 'next/link';
import styles from '../../styles/GlobalComponent.module.css';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube  } from 'react-icons/fa';
import footerData from '../datas/Footer.json';

const iconComponents = {
  FaFacebook,
  FaInstagram,
  FaYoutube,
};

const Footer = () => {
  return (
    <div className={styles.allFooter}>
      <footer className={styles.footer}>
        <nav className={styles.footerPart}>
          <Link href="/">
            <Image
              src={footerData.logo}
              alt="matbaa, tempo, baskı, basım, karton, kağıt, reklam, kartvizit, broşür, tanıtım"
              layout="intrinsic"
              width={200}
              height={50}
              className={styles.logoImage}
            />
          </Link>
          <span>{footerData.description}</span>
          <div className={styles.socialBar}>
            {footerData?.socialLinks?.map((link, index) => {
              const Icon = iconComponents[link.icon];
              return (
                <Link key={index} href={link?.href} target='_blank' className={styles[link.className]}>
                  <Icon size={25} />
                </Link>
              );
            })}
          </div>
        </nav>
        <nav className={styles.footerPart}>
          <h2>HİZMETLERİMİZ</h2>
          <div className={styles.seperator}></div>
          <ul>
            {footerData.services.map((service, index) => (
              <li key={index}>
                <Link href={service.href}>{service.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={styles.footerPart}>
          <h2>İLETİŞİM BİLGİLERİ</h2>
          <div className={styles.seperator}></div>
          <span>Telefon: {footerData.contact.phone}</span>
          <span>E-Mail: {footerData.contact.email}</span>
          <span>Adres:<br /> {footerData.contact.address}</span>
        </nav>
        <nav className={styles.footerPart}>
          <h2>ÇALIŞMA SAATLERİ</h2>
          <div className={styles.seperator}></div>
          <div className={styles.workTimes}>
            <span>Hafta İçi:</span>
            <span>{footerData.workHours.weekdays}</span>
          </div>
          <div className={styles.pointSeperator}></div>
          <div className={styles.workTimes}>
            <span>Cumartesi:</span>
            <span>{footerData.workHours.saturday}</span>
          </div>
          <div className={styles.pointSeperator}></div>
          <div className={styles.workTimes}>
            <span>Pazar:</span>
            <span>{footerData.workHours.sunday}</span>
          </div>
        </nav>
      </footer>
      <div className={styles.copyRight}>
        <span>{footerData.copyright}</span>
        <Link href={footerData.developerLink} target='_blank'>
          <span className={styles.dev}>{footerData.developerName}</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
