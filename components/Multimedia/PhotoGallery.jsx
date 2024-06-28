import React, { useState } from 'react';
import styles from '../../styles/MultimediaComponent.module.css';
import Image from 'next/image';

const PhotoGallery = ({ photos }) => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const openModal = (photo) => {
        setSelectedPhoto(photo);
    }

    const closeModal = () => {
        setSelectedPhoto(null);
    }

    return (
        <div>
            <div className={styles.gallery}>
                {photos.map((photo, index) => (
                    <div key={index} className={styles.thumbnail} onClick={() => openModal(photo)}>
                        <Image
                            src={photo}
                            alt={`Thumbnail ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className={styles.overlay}>
                            <span className={styles.overlayText}>Görüntüle</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPhoto && (
                <div className={`${styles.modal} ${selectedPhoto ? styles.showModal : ''}`} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span className={styles.closeButton} onClick={closeModal}>&times;</span>
                        <Image
                            src={selectedPhoto}
                            alt="Selected"
                            width={800}
                            height={800}
                            className={styles.largeImage}
                            objectFit="contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default PhotoGallery;
