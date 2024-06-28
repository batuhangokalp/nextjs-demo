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
                    text="Vatan Mahallesi, Vatan Sokak No: 00 / 00"
                    text2="İstanbul / TÜRKİYE"
                    icon={<FaLocationDot size={25} color='#fff' />}
                />
                <ContactInfoBox
                    heading="Telefon"
                    text="0212 000 00 00"
                    icon={<FaPhone size={25} color='#fff' />}
                />
                <ContactInfoBox
                    heading="Gsm"
                    text="0500 000 00 00"
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.611389226259!2d28.97695951575219!3d41.0296629792995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9c4f7baf49f%3A0x100000000000000!2zS8O8w7zDtnkgSXN0YW5idWw!5e0!3m2!1str!2str!4v1675000000000!5m2!1str!2str"
                    width="100%"
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
