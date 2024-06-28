"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/GlobalComponent.module.css';
import Image from 'next/image';

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (link) => {
        setHoveredLink(link);
    }

    const handleMouseLeave = () => {
        setHoveredLink(null);
    }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }
    const closeModal = (e) => {
        if (e.target.classList.contains(styles.modal)) {
            setModalOpen(false);
        }
    }

    return (
        <header className={styles.header}>
            <nav className={styles.navLogo}>
                <Link href="/">
                    <Image src="/pictures/etut-logo.png" alt="Logo" layout="intrinsic" width={200} height={50} className={styles.logoImage} />
                </Link>
            </nav>
            <nav className={styles.navLinks}>
                <ul>
                    <li><Link href="/">Ana Sayfa</Link></li>
                    <li
                        onMouseEnter={() => handleMouseEnter('hakkimizda')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>Hakkımızda +</span>
                        {hoveredLink === 'hakkimizda' && (
                            <div className={styles.hoverModal}>
                                <ul>
                                    <li><Link href="/hakkimizda/biz-kimiz">Biz Kimiz</Link></li>
                                    <li><Link href="/hakkimizda/vizyon-misyon">Misyon ve Vizyon</Link></li>
                                    <li><Link href="/hakkimizda/ekibimiz">Ekibimiz</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('hizmetlerimiz')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>Hizmetlerimiz +</span>
                        {hoveredLink === 'hizmetlerimiz' && (
                            <div className={styles.hoverModal}>
                                <ul>
                                    <li><Link href="/hizmetlerimiz/hizmet1">Hizmet 1</Link></li>
                                    <li><Link href="/hizmetlerimiz/hizmet2">Hizmet 2</Link></li>
                                    <li><Link href="/hizmetlerimiz/hizmet3">Hizmet 3</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('programlarimiz')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>Programlarımız +</span>
                        {hoveredLink === 'programlarimiz' && (
                            <div className={styles.hoverModal}>
                                <ul>
                                    <li><Link href="/programlarimiz/ilkokul">İlkokul</Link></li>
                                    <li><Link href="/programlarimiz/ortaokul">Ortaokul</Link></li>
                                    <li><Link href="/programlarimiz/lise">Lise</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('multimedya')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>Multimedya +</span>
                        {hoveredLink === 'multimedya' && (
                            <div className={styles.hoverModal}>
                                <ul>
                                    <li><Link href="/video">Video</Link></li>
                                    <li><Link href="/foto">Fotoğraf</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li><Link href="/iletisim">İletişim</Link></li>
                </ul>
            </nav>
            <div className={styles.hamburger} onClick={toggleModal}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {modalOpen && (
                <div className={`${styles.modal} ${styles.showModal}`} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <span className={styles.closeButton} onClick={toggleModal}>&times;</span>
                        <Image src="/pictures/etut-logo.png" alt="Logo" layout="intrinsic" width={100} height={20} className={styles.logoImageResponsive} />
                        <ul>
                            <li><Link href="/">Ana Sayfa</Link></li>
                            <li><Link href="/hakkimizda">Hakkımızda +</Link></li>
                            <li><Link href="/hizmetlerimiz">Hizmetlerimiz +</Link></li>
                            <li><Link href="/programlarimiz">Programlarımız +</Link></li>
                            <li><Link href="/multimedya">MultiMedya +</Link></li>
                            <li><Link href="/iletisim">İletişim</Link></li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
