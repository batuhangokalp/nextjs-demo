import styles from '../../styles/ContactComponent.module.css';

const ContactInfoBox = ({ heading, text, text2, icon }) => {
    return (
        <div className={styles.contactInfoBox}>
            <div className={styles.cornerBox}>{icon}</div>
            <h4>{heading}</h4>
            <span>{text} <br /> {text2} </span>
        </div>
    )
}

export default ContactInfoBox