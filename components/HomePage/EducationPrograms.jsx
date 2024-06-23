import React from 'react'
import styles from '../../styles/HomeComponent.module.css'
import Image from 'next/image';
import Link from 'next/link';

const EducationPrograms = () => {
    return (
        <div className={styles.educationPrograms}>
            <h4>EĞİTİM ALANLARIMIZ VE ÇALIŞMALARIMIZ</h4>
            <h2>EĞİTİM PROGRAMLARIMIZ</h2>
            <div className={styles.educationProgramsBoxes}>
                <div className={styles.educationProgramsBox}>
                    <div className={styles.educationProgramsBoxImg}>
                        <Link href="#">
                            <Image
                                src="/pictures/ilkokul.png"
                                alt="Logo"
                                layout="fill"
                                className={styles.logoImage}
                            />
                        </Link>
                    </div>
                    <div className={styles.educationProgramsBoxText}>
                        <h3>İlkokul</h3>
                    </div>
                </div>
                <div className={styles.educationProgramsBox}>
                    <div className={styles.educationProgramsBoxImg}>
                        <Link href="#">
                            <Image
                                src="/pictures/ortaokul.jpg"
                                alt="Logo"
                                layout="fill"
                                className={styles.logoImage}
                            />
                        </Link>
                    </div>
                    <div className={styles.educationProgramsBoxText}>
                        <h3>Ortaokul</h3>
                    </div>
                </div>
                <div className={styles.educationProgramsBox}>
                    <div className={styles.educationProgramsBoxImg}>
                        <Link href="#">
                            <Image
                                src="/pictures/lise.jpg"
                                alt="Logo"
                                layout="fill"
                                className={styles.logoImage}
                            />
                        </Link>
                    </div>
                    <div className={styles.educationProgramsBoxText}>
                        <h3>Lise</h3>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EducationPrograms