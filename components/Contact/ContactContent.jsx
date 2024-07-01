"use client";
import styles from '../../styles/ContactComponent.module.css'
import ContactInfoBox from '../GlobalComponents/ContactInfoBox';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone, FaMobile } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from 'react';

const ContactContent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form verilerini işleme kodlarını buraya ekleyin
        console.log('Form submitted:', formData);
        // Formu gönderip verileri işledikten sonra formu sıfırlayabilirsiniz
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };
    return (
        <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
                <ContactInfoBox
                    heading="Adres"
                    text=" Vatan Mahallesi Sever Sokak No: 1"
                    text2="İstanbul / TÜRKİYE"
                    icon={<FaLocationDot size={25} color='#fff' />}
                />
                <ContactInfoBox
                    heading="Telefon"
                    text=" 0212 000 00 00"
                    icon={<FaPhone size={25} color='#fff' />}
                />
                <ContactInfoBox
                    heading="Gsm"
                    text="+90 555 555 55 55"
                    icon={<FaMobile size={25} color='#fff' />}
                />
                <ContactInfoBox
                    heading="E-Mail"
                    text="egitim@gmail.com"
                    icon={<IoMdMail size={25} color='#fff' />}
                />
            </div>
            <div className={styles.seperator} />
            <div className={styles.contactForm}>
                <h1>İletişim Formu</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Ad"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Soyad"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="E-posta"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Telefon"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.formGroup2}>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Mesaj"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.button}>Gönder</button>
                </form>
            </div>
            <div className={styles.seperator} />
            <div className={styles.contactMaps}>
                <h1>Neredeyiz</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d384550.81481668266!2d28.889957!3d41.149734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1sen!2sus!4v1719826399788!5m2!1sen!2sus" width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}

export default ContactContent;


