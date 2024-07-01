import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/GlobalComponent.module.css';

const EducationProgramBox = ({ text, src, link }) => {
    return (
        <div className={styles.educationProgramsBox}>
            <div className={styles.educationProgramsBoxImg}>
                <Link href={link}>
                    <Image
                        src={src}
                        alt="matbaa, tempo, baskı, basım, karton, kağıt, reklam, kartvizit, broşür, tanıtım"
                        layout="fill"
                        className={styles.educationProgramsImg}
                    />
                </Link>
            </div>
            <div className={styles.educationProgramsBoxText}>
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default EducationProgramBox