"use client";
import styles from '../../styles/ContactComponent.module.css'
import ContactInfoBox from '../GlobalComponents/ContactInfoBox';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone, FaMobile } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from 'react';
import emailjs from "@emailjs/browser";

const ContactContent = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
      };
      const handleSurname = (event) => {
        setSurname(event.target.value);
      };
      const handleEmail = (event) => {
        setEmail(event.target.value);
      };
      const handlePhone = (event) => {
        setPhone(event.target.value);
      };
      const handleMessage = (event) => {
        setMessage(event.target.value);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
          "service_x8to8r3",
          "template_h1wphja",
          form.current,
          "HIEfNIrIn-f8wU_7t"
        )
        .then(
          (result) => {
            console.log(result.text);
            setName("");
            setSurname("");
            setEmail("");
            setPhone("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
        <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
                <ContactInfoBox
                    heading="Adres"
                    text=" Yüzyıl Mahallesi Matbaacılar Sitesi 5. Cad. No: 68"
                    text2="İstanbul / TÜRKİYE"
                    icon={<FaLocationDot size={25} color='#fff' />}
                />
                <ContactInfoBox
                    heading="Telefon"
                    text=" 0212 565 86 87"
                    icon={<FaPhone size={25} color='#fff' />}
                />
                <ContactInfoBox
                    heading="Gsm"
                    text="+90 507 819 24 98"
                    icon={<FaMobile size={25} color='#fff' />}
                />
                <ContactInfoBox
                    heading="E-Mail"
                    text="matbaatempo@gmail.com"
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
                                id="name"
                                name="name"
                                placeholder="Ad"
                                value={name}
                                onChange={handleName}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                placeholder="Soyad"
                                value={surname}
                                onChange={handleSurname}
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
                                value={email}
                                onChange={handleEmail}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Telefon"
                                value={phone}
                                onChange={handlePhone}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.formGroup2}>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Mesaj"
                            value={message}
                            onChange={handleMessage}
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.3340305117704!2d28.847962474870975!3d41.06169061613614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb6fc1e2d5fb%3A0xfd4cb81bb51a02f!2sTEMPO%20MATBAA!5e0!3m2!1str!2str!4v1717078976637!5m2!1str!2str"
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
