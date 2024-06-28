"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/GlobalComponent.module.css';
import Image from 'next/image';

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [openSubmenu, setOpenSubmenu] = useState(null);

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

    const toggleSubmenu = (menu) => {
        if (openSubmenu === menu) {
            setOpenSubmenu(null);
        } else {
            setOpenSubmenu(menu);
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
                                    <li><Link href="/hakkimizda/vizyon-misyon">Vizyon ve Misyonumuz</Link></li>
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
                                    <li><Link href="/hizmetlerimiz/yabanci-dil">Yabancı Dil</Link></li>
                                    <li><Link href="/hizmetlerimiz/yaz-okulu">Yaz Okulu</Link></li>
                                    <li><Link href="/hizmetlerimiz/kodlama-atolyesi">Kodlama Atolyesi</Link></li>
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
                                    <li><Link href="/multimedya/video">Video</Link></li>
                                    <li><Link href="/multimedya/fotograf">Fotoğraf</Link></li>
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
                            <li><span onClick={() => toggleSubmenu('hakkimizda')}>Hakkımızda +</span></li>
                            {openSubmenu === 'hakkimizda' && (
                                <ul className={styles.subMenu}>
                                    <li><Link href="/hakkimizda/biz-kimiz">Biz Kimiz</Link></li>
                                    <li><Link href="/hakkimizda/vizyon-misyon">Vizyon ve Misyonumuz</Link></li>
                                    <li><Link href="/hakkimizda/ekibimiz">Ekibimiz</Link></li>
                                </ul>
                            )}
                            <li><span onClick={() => toggleSubmenu('hizmetlerimiz')}>Hizmetlerimiz +</span></li>
                            {openSubmenu === 'hizmetlerimiz' && (
                                <ul className={styles.subMenu}>
                                    <li><Link href="/hizmetlerimiz/yabanci-dil">Yabancı Dil</Link></li>
                                    <li><Link href="/hizmetlerimiz/yaz-okulu">Yaz Okulu</Link></li>
                                    <li><Link href="/hizmetlerimiz/kodlama-atolyesi">Kodlama Atolyesi</Link></li>
                                </ul>
                            )}
                            <li><span onClick={() => toggleSubmenu('programlarimiz')}>Programlarımız +</span></li>
                            {openSubmenu === 'programlarimiz' && (
                                <ul className={styles.subMenu}>
                                    <li><Link href="/programlarimiz/ilkokul">İlkokul</Link></li>
                                    <li><Link href="/programlarimiz/ortaokul">Ortaokul</Link></li>
                                    <li><Link href="/programlarimiz/lise">Lise</Link></li>
                                </ul>
                            )}
                            <li><span onClick={() => toggleSubmenu('multimedya')}>Multimedya +</span></li>
                            {openSubmenu === 'multimedya' && (
                                <ul className={styles.subMenu}>
                                    <li><Link href="/multimedya/video">Video</Link></li>
                                    <li><Link href="/multimedya/fotograf">Fotoğraf</Link></li>
                                </ul>
                            )}
                            <li><Link href="/iletisim">İletişim</Link></li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
