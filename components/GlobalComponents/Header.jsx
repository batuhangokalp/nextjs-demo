"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/GlobalComponent.module.css';
import Image from 'next/image';
import headerData from '../datas/Header.json'

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
                    <Image
                        src={headerData.logo}
                        alt="eğitim, kurs, dershane, etüt, özel ders, öğrenci, öğretmen, lise, ilkokul, ortaokul, sınav"
                        layout="intrinsic"
                        width={200}
                        height={50}
                        className={styles.logoImage}
                    />
                </Link>
            </nav>
            <nav className={styles.navLinks}>
                <ul>
                    {headerData.links.map((link, index) => (
                        <li
                            key={index}
                            onMouseEnter={() => handleMouseEnter(link.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {link.submenu ? (
                                <>
                                    <span>{link.label} +</span>
                                    {hoveredLink === link.label && (
                                        <div className={styles.hoverModal}>
                                            <ul>
                                                {link.submenu.map((sublink, subindex) => (
                                                    <li key={subindex}><Link href={sublink.href}>{sublink.label}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link href={link.href}>{link.label}</Link>
                            )}
                        </li>
                    ))}
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
                        <Image
                            src={headerData.logo}
                            alt="eğitim, kurs, dershane, etüt, özel ders, öğrenci, öğretmen, lise, ilkokul, ortaokul, sınav"
                            layout="intrinsic"
                            width={100}
                            height={20}
                            className={styles.logoImageResponsive}
                        />
                        <ul>
                            {headerData.links.map((link, index) => (
                                <React.Fragment key={index}>
                                    {link.submenu ? (
                                        <>
                                            <li><span onClick={() => toggleSubmenu(link.label)}>{link.label} +</span></li>
                                            {openSubmenu === link.label && (
                                                <ul className={styles.subMenu}>
                                                    {link.submenu.map((sublink, subindex) => (
                                                        <li key={subindex}><Link href={sublink.href}>{sublink.label}</Link></li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <li><Link href={link.href}>{link.label}</Link></li>
                                    )}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
