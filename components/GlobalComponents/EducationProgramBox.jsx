import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/GlobalComponent.module.css';

const EducationProgramBox = ({ text, src }) => {
    return (
        <div className={styles.educationProgramsBox}>
            <div className={styles.educationProgramsBoxImg}>
                <Link href="#">
                    <Image
                        src={src}
                        alt="Logo"
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