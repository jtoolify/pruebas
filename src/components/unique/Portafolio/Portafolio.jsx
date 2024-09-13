import React from 'react';
import Image from 'next/image';
import styles from './Portafolio.module.css'; 
import fondoPortafolio from '@/assets/images/fondos/portafolio.jpg';

const Portafolio = ({ title, description, pdfUrl }) => {
  return (
    <div className={styles.fullWidthSection}>
      <div className={styles.image}>
        <Image src={fondoPortafolio} alt="Portafolio" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <h5>{title}</h5>
        <p>{description}</p>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
          VER PDF
        </a>
      </div>
    </div>
  );
};

export default Portafolio;
