import React from 'react';
import styles from '../../styles/MultimediaComponent.module.css';

const VideoGallery = ({ videos }) => {
    return (
        <div className={styles.videoGallery}>
            {videos.map((video, index) => (
                <iframe
                    key={index}
                    width="45%"
                    height="350"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.iframe}

                />
            ))}
        </div>
    );
};

export default VideoGallery;
